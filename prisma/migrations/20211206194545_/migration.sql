/*
  Warnings:

  - You are about to alter the column `number` on the `Telephone` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `dd_code` on the `Telephone` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Telephone" ALTER COLUMN "number" SET DATA TYPE INTEGER,
ALTER COLUMN "dd_code" SET DATA TYPE INTEGER;
