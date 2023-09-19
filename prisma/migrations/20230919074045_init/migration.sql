-- CreateEnum
CREATE TYPE "Climate" AS ENUM ('HOT', 'HUMID', 'RAINY', 'COLD');

-- CreateTable
CREATE TABLE "weather_sync_records" (
    "id" SERIAL NOT NULL,
    "climate" "Climate" NOT NULL,
    "areaCode" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "chancesOfRain" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "weather_sync_records_pkey" PRIMARY KEY ("id")
);


ALTER TABLE "weather_sync_records" ADD CONSTRAINT "areaCode" CHECK ("areaCode" >= 100 AND "areaCode" <= 1000);
ALTER TABLE "weather_sync_records" ADD CONSTRAINT "chancesOfRain" CHECK ("chancesOfRain" >= 0 AND "chancesOfRain" <= 100);
