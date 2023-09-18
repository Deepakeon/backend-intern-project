import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { WeatherSyncService } from './weather-sync.service';
import { GetWeatherSyncFilterDto, WeatherSyncDto } from './dto';
import { WeatherSyncDeltaParamsDto } from './dto/get-weather-sync-delta.dto';

@Controller('weather-sync')
export class WeatherSyncController {

    constructor( private weatherSyncService: WeatherSyncService) {}

    @Post('add')
    addWeatherSync(@Body() dto: WeatherSyncDto) {
        return this.weatherSyncService.add(dto)
    }

    @Get()
    getWeatherSyncRecords(@Query() filterDto: GetWeatherSyncFilterDto){
        return this.weatherSyncService.getWeatherSyncRecords(filterDto)
    }

    @Get('delta')
    getWeatherSyncDelta(@Body() weatherSyncDeltaParams: WeatherSyncDeltaParamsDto){
        return this.weatherSyncService.getWeatherSyncDelta(weatherSyncDeltaParams)
    }
}
