import { ApiProperty } from "@nestjs/swagger"
import { Climate } from "@prisma/client"
import { IsEnum, IsInt, IsNumber, IsString, Max, Min } from "class-validator"

export class WeatherSyncDto {

    @ApiProperty({
        enum: Climate,
        example: Climate.COLD,
        description: 'The climate of the weather sync record'
    })
    @IsEnum(Climate)
    climate: Climate

    @IsInt()
    @Min(100)
    @Max(1000)
    areaCode: number

    @IsNumber()
    temperature: number

    @IsNumber()
    humidity: number

    @IsNumber()
    @Min(0)
    @Max(100)
    chancesOfRain: number
}
