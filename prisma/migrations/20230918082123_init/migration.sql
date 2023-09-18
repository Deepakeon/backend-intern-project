-- CreateEnum
CREATE TYPE "Climate" AS ENUM ('HOT', 'HUMID', 'RAINY', 'COLD');

-- CreateTable
CREATE TABLE "WeatherSync" (
    "id" SERIAL NOT NULL,
    "climate" "Climate" NOT NULL,
    "areaCode" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "chancesOfRain" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "WeatherSync_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "WeatherSync" ADD CONSTRAINT "areaCode" CHECK ("areaCode" >= 100 AND "areaCode" <= 1000);
ALTER TABLE "WeatherSync" ADD CONSTRAINT "chancesOfRain" CHECK ("chancesOfRain" >= 0 AND "chancesOfRain" <= 100);
