-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "image" TEXT,
    "nike_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "wishlist_products" TEXT,
    "wishlist_stores" TEXT,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "qualification" TEXT,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Telephone" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "dd_code" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Telephone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subcategorie" (
    "id" TEXT NOT NULL,
    "subcategory_name" TEXT NOT NULL,
    "subcategory_banner" TEXT NOT NULL,
    "subcategory_image" TEXT NOT NULL,
    "subcategory_icon" TEXT NOT NULL,
    "subcategory_route" TEXT NOT NULL,
    "subcategory_status" TEXT NOT NULL,
    "subcategory_counter_views" INTEGER NOT NULL,
    "description" TEXT,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subcategorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "product_name" TEXT,
    "price" INTEGER,
    "description" TEXT,
    "specifications" TEXT,
    "details" TEXT,
    "product_route" TEXT,
    "product_tags" TEXT,
    "video" TEXT,
    "main_image" TEXT,
    "gallery" TEXT,
    "image_3d" TEXT,
    "status" TEXT,
    "qualification" TEXT,
    "counter_view_product" INTEGER NOT NULL,
    "platform" TEXT,
    "collection" TEXT,
    "the_mount" INTEGER,
    "discount" INTEGER,
    "turbo_level" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "order_status" TEXT,
    "payment_method" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id" TEXT NOT NULL,
    "name_category" TEXT NOT NULL,
    "banner_category" TEXT NOT NULL,
    "picture_category" TEXT NOT NULL,
    "icon_category" TEXT,
    "status_category" BOOLEAN NOT NULL DEFAULT true,
    "counter_views_category" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nike_name_key" ON "User"("nike_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
