import { ApiProperty } from "@nestjs/swagger"
import { Climate } from "@prisma/client"
import { Type } from "class-transformer"
import { IsEnum, IsInt, IsNumber, IsOptional, Max, Min } from "class-validator"
import { IsNotEqualsTo } from "src/common/validators"

export class CreateWeatherSyncDto {

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


export class GetWeatherSyncDto {

    @Type(() => Number)
    @IsNumber()
    @IsOptional()
    areaCode: number

    @ApiProperty({
        enum: Climate,
        example: Climate.COLD,
        description: 'The climate of the weather sync record'
    })
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


export class GetWeatherSyncDeltaDto {

    @ApiProperty({
        enum: Climate,
        example: Climate.COLD,
        description: 'The climate of the weather sync record'
    })
    @IsEnum(Climate)
    fromClimate: Climate

    @ApiProperty({
        enum: Climate,
        example: Climate.COLD,
        description: 'The climate of the weather sync record, must be different from fromClimate'
    })
    @IsEnum(Climate)
    @IsNotEqualsTo('fromClimate')
    toClimate: Climate

    @Type(() => Number)
    @IsInt()
    @Min(100)
    @Max(1000)
    areaCode: number
}