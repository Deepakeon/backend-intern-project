import { Module } from '@nestjs/common';

import { WeatherSyncController } from './weather-sync.controller';
import { WeatherSyncService } from './weather-sync.service';

@Module({
  controllers: [WeatherSyncController],
  providers: [WeatherSyncService]
})
export class WeatherSyncModule {}
