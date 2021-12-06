/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nike_name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nike_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualification` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wishlist_products` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wishlist_shops` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
DROP COLUMN "role",
ADD COLUMN     "address_id" INTEGER NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "nike_name" TEXT NOT NULL,
ADD COLUMN     "phone_id" INTEGER NOT NULL,
ADD COLUMN     "qualification" TEXT NOT NULL,
ADD COLUMN     "surname" TEXT NOT NULL,
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD COLUMN     "wishlist_products" TEXT NOT NULL,
ADD COLUMN     "wishlist_shops" TEXT NOT NULL,
ALTER COLUMN "status" DROP DEFAULT,
ALTER COLUMN "status" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_nike_name_key" ON "User"("nike_name");
