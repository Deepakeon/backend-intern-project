import { ApiProperty } from "@nestjs/swagger";
import { Climate } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsInt, Max, Min } from "class-validator";

import { IsNotEqualsTo } from "src/common/validators";

export class WeatherSyncDeltaParamsDto {

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