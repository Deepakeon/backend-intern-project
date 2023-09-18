import { Module } from '@nestjs/common';
import { WeatherSyncModule } from './weather-sync/weather-sync.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [WeatherSyncModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
