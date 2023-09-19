import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';

import { WeatherSyncService } from './weather-sync.service';
import { GetWeatherSyncFilterDto, WeatherSyncDto } from './dto';
import { GetWeatherSyncDeltaParamsDto } from './dto';

@Controller('weather-sync')
export class WeatherSyncController {

    constructor(private weatherSyncService: WeatherSyncService) { }

    @Post('add')
    addWeatherSync(@Body() dto: WeatherSyncDto) {
        return this.weatherSyncService.add(dto)
    }

    @Get()
    getWeatherSyncRecords(@Query() filterDto: GetWeatherSyncFilterDto) {
        return this.weatherSyncService.getWeatherSyncRecords(filterDto)
    }

    @Get('delta')
    @HttpCode(HttpStatus.OK)
    getWeatherSyncDelta(@Query() weatherSyncParamsDto: GetWeatherSyncDeltaParamsDto) {
        return this.weatherSyncService.getWeatherSyncDelta(weatherSyncParamsDto)
    }
}
