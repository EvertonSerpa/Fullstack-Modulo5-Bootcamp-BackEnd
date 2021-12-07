-- CreateTable
CREATE TABLE "Products" (
    "products_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "specifications" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "product_route" TEXT NOT NULL,
    "product_tags" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "main_image" TEXT NOT NULL,
    "gallery" TEXT NOT NULL,
    "image_3d" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "counter_views_product" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "the_amount" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "turbo_level" INTEGER NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("products_id")
);
