/*
  Warnings:

  - The primary key for the `Orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orders_id` on the `Orders` table. All the data in the column will be lost.
  - The primary key for the `Posts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `posts_id` on the `Posts` table. All the data in the column will be lost.
  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `products_id` on the `Products` table. All the data in the column will be lost.
  - The primary key for the `Subcategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Subcategories_id` on the `Subcategories` table. All the data in the column will be lost.
  - The primary key for the `Telephone` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `telephone_id` on the `Telephone` table. All the data in the column will be lost.
  - The required column `id` was added to the `Orders` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Posts` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Products` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Subcategories` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Telephone` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_pkey",
DROP COLUMN "orders_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Orders_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_pkey",
DROP COLUMN "posts_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Posts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
DROP COLUMN "products_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Subcategories" DROP CONSTRAINT "Subcategories_pkey",
DROP COLUMN "Subcategories_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Subcategories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Telephone" DROP CONSTRAINT "Telephone_pkey",
DROP COLUMN "telephone_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Telephone_pkey" PRIMARY KEY ("id");
