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
CREATE TABLE "Subcategorie" (
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

    CONSTRAINT "Subcategorie_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "Qualification" (
    "id" TEXT NOT NULL,
    "value_qualification" INTEGER NOT NULL,
    "comment" TEXT,
    "nick_name" TEXT,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Qualification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL,
    "status_sale" TEXT NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale_Product" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER,
    "sale_price" INTEGER NOT NULL,
    "pay_rate" INTEGER,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sale_Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispute" (
    "id" TEXT NOT NULL,
    "dispute_matter" TEXT,
    "dispute_body" TEXT,
    "reply_seller" TEXT,
    "status_dispute" TEXT,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dispute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "message_matter" TEXT,
    "message_body" TEXT,
    "reply_seller" TEXT,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment_Method" (
    "id" TEXT NOT NULL,
    "owner_name" TEXT,
    "account_number" TEXT,
    "expiration_date_mm" INTEGER,
    "expiration_date_yy" INTEGER,
    "identification_doc" TEXT,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_Method_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nike_name_key" ON "User"("nike_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
