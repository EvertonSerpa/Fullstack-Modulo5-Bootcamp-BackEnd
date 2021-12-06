/*
  Warnings:

  - Changed the type of `number` on the `Telephone` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dd_code` on the `Telephone` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Telephone" DROP COLUMN "number",
ADD COLUMN     "number" BIGINT NOT NULL,
DROP COLUMN "dd_code",
ADD COLUMN     "dd_code" BIGINT NOT NULL;
