import { Climate } from "@prisma/client"
import { Type } from "class-transformer"
import { IsEnum, IsNumber, IsOptional } from "class-validator"

export class GetWeatherSyncFilterDto {
    @Type(() => Number)
    @IsNumber()
    @IsOptional()
    areaCode: number

    @IsEnum(Climate)
    @IsOptional()
    climate: Climate

    @Type(() => Number)
    @IsNumber()
    @IsOptional()
    temperature: number

    @Type(() => Number)
    @IsNumber()
    @IsOptional()
    humidity: number

    @Type(() => Number)
    @IsNumber()
    @IsOptional()
    chancesOfRain: number
}