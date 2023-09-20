import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';

import { WeatherSyncService } from './weather-sync.service';
import { GetWeatherSyncDto, CreateWeatherSyncDto } from './dto';
import { GetWeatherSyncDeltaDto } from './dto';

@Controller('weather-sync')
export class WeatherSyncController {

    constructor(private weatherSyncService: WeatherSyncService) { }

    @Post('add')
    addWeatherSync(@Body() dto: CreateWeatherSyncDto) {
        return this.weatherSyncService.add(dto)
    }

    @Get()
    getWeatherSyncRecords(@Query() getWeatherSyncDto: GetWeatherSyncDto) {
        return this.weatherSyncService.getWeatherSyncRecords(getWeatherSyncDto)
    }

    @Get('delta')
    @HttpCode(HttpStatus.OK)
    getWeatherSyncDelta(@Query() getWeatherSyncDeltaDto: GetWeatherSyncDeltaDto) {
        return this.weatherSyncService.getWeatherSyncDelta(getWeatherSyncDeltaDto)
    }
}
