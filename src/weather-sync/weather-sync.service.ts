import { BadRequestException, Injectable } from '@nestjs/common';
import { WeatherSyncRecord } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';
import { GetWeatherSyncFilterDto, WeatherSyncDto } from './dto';
import { GetWeatherSyncDeltaParamsDto } from './dto';

@Injectable()
export class WeatherSyncService {
    constructor(private prisma: PrismaService) { }

    calculateClimateChangeIndex(temperatureDelta: number, humidityDelta: number, chancesOfRainDelta: number) {
        return (temperatureDelta * humidityDelta) / chancesOfRainDelta
    }

    calculateWeatherSyncDelta(fromClimate: string, toClimate: string, records: WeatherSyncRecord[]) {
        let temperatureSum = [0, 0], humiditySum = [0, 0], chancesOfRainSum = [0, 0]

        records.forEach(record => {
            if (record.climate === fromClimate) {
                temperatureSum[0] += record.temperature
                humiditySum[0] += record.humidity
                chancesOfRainSum[0] += record.chancesOfRain
            } else if (record.climate === toClimate) {
                temperatureSum[1] += record.temperature
                humiditySum[1] += record.humidity
                chancesOfRainSum[1] += record.chancesOfRain
            }
        })

        return {
            temperatureDelta: records.length ? (temperatureSum[1] - temperatureSum[0]) / records.length : 0,
            humidityDelta: records.length ? (humiditySum[1] - humiditySum[0]) / records.length : 0,
            chancesOfRainDelta: records.length ? (chancesOfRainSum[1] - chancesOfRainSum[0]) / records.length : 0
        }
    }

    async add(dto: WeatherSyncDto) {
        const weather = await this.prisma.weatherSyncRecord.create({
            data: dto
        })

        return weather
    }

    async getWeatherSyncRecords(filterDto: GetWeatherSyncFilterDto) {
        const { areaCode, climate, temperature, humidity, chancesOfRain } = filterDto
        return await this.prisma.weatherSyncRecord.findMany({
            where: {
                areaCode,
                climate,
                temperature,
                humidity,
                chancesOfRain
            }
        })
    }

    async getWeatherSyncDelta(weatherSyncParamsDto: GetWeatherSyncDeltaParamsDto) {
        const { areaCode, fromClimate, toClimate } = weatherSyncParamsDto
        const records = await this.prisma.weatherSyncRecord.findMany({
            where: {
                areaCode,
                climate: {
                    in: [fromClimate, toClimate]
                }
            }
        })

        if (!records.length) {
            throw new BadRequestException('No records found')
        }

        const { temperatureDelta, humidityDelta, chancesOfRainDelta } = this.calculateWeatherSyncDelta(fromClimate, toClimate, records)

        const climateChangeIndex = this.calculateClimateChangeIndex(temperatureDelta, humidityDelta, chancesOfRainDelta)

        return {
            climateDelta: `${fromClimate} -> ${toClimate}`,
            temperatureDelta,
            humidityDelta,
            chancesOfRainDelta,
            climateChangeIndex
        }
    }
}
