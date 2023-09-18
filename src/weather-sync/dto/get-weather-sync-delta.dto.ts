import { Climate } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsInt, Max, Min } from "class-validator";
import { IsNotEqualsTo } from "src/common/validators/is-not-equals-to.validator";

export class WeatherSyncDeltaParamsDto {
    @IsEnum(Climate)
    fromClimate: Climate

    @IsEnum(Climate)
    @IsNotEqualsTo('fromClimate')
    toClimate: Climate

    @Type(() => Number)
    @IsInt()
    @Min(100)
    @Max(1000)
    areaCode: number
}