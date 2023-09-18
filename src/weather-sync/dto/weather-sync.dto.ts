import { Climate } from "@prisma/client"
import { IsEnum, IsInt, IsNumber, Max, Min } from "class-validator"

export class WeatherSyncDto {

    @IsEnum(Climate)
    climate: Climate

    @IsInt()
    @Min(100)
    @Max(1000)
    areaCode: number

    @IsNumber({ maxDecimalPlaces: 2 })
    temperature: number

    @IsNumber({ maxDecimalPlaces: 2 })
    humidity: number

    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    @Max(100)
    chancesOfRain: number
}
