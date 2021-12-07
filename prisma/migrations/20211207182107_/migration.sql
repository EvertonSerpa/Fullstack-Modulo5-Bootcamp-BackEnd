-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "nike_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "wishlist_products" TEXT NOT NULL,
    "wishlist_shops" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Telephone" (
    "telephone_id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "dd_code" INTEGER NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Telephone_pkey" PRIMARY KEY ("telephone_id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "orders_id" TEXT NOT NULL,
    "status_order" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("orders_id")
);

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

-- CreateTable
CREATE TABLE "Subcategories" (
    "Subcategories_id" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "subcategory_name" TEXT NOT NULL,
    "subcategory_banner" TEXT NOT NULL,
    "subcategory_image" TEXT NOT NULL,
    "subcategory_icon" TEXT NOT NULL,
    "subcategory_route" TEXT NOT NULL,
    "subcategory_status" TEXT NOT NULL,
    "counter_views_subcategory" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subcategories_pkey" PRIMARY KEY ("Subcategories_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nike_name_key" ON "User"("nike_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
