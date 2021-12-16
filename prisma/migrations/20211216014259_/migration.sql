-- CreateTable
CREATE TABLE "Users" (
    "id_users" TEXT NOT NULL,
    "name" VARCHAR(70) NOT NULL,
    "surname" VARCHAR(70) NOT NULL,
    "profile_picture" TEXT NOT NULL,
    "nike_name" VARCHAR(50) NOT NULL,
    "password" VARCHAR(60) NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "seller" BOOLEAN NOT NULL DEFAULT false,
    "description" VARCHAR(1000),
    "banner" TEXT NOT NULL,
    "average_qualification" INTEGER,
    "conter_views_store" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id_users")
);

-- CreateTable
CREATE TABLE "Telephones" (
    "id_telephones" TEXT NOT NULL,
    "number_telephone" INTEGER NOT NULL,
    "region_code" INTEGER NOT NULL,
    "country_code" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Telephones_pkey" PRIMARY KEY ("id_telephones")
);

-- CreateTable
CREATE TABLE "Wishlists" (
    "id_wishlist" TEXT NOT NULL,

    CONSTRAINT "Wishlists_pkey" PRIMARY KEY ("id_wishlist")
);

-- CreateTable
CREATE TABLE "Qualification" (
    "id_qualification" TEXT NOT NULL,
    "value_qualification" INTEGER NOT NULL,
    "comment" VARCHAR(1000),
    "nick_name" VARCHAR(50),
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Qualification_pkey" PRIMARY KEY ("id_qualification")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id_categories" TEXT NOT NULL,
    "name_category" VARCHAR(100) NOT NULL,
    "banner_category" TEXT NOT NULL,
    "picture_category" TEXT NOT NULL,
    "icon_category" TEXT,
    "status_category" BOOLEAN NOT NULL DEFAULT true,
    "counter_views_category" INTEGER NOT NULL DEFAULT 0,
    "description" VARCHAR(1000),
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id_categories")
);

-- CreateTable
CREATE TABLE "Subcategories" (
    "id_subcategories" TEXT NOT NULL,
    "name_subcategory" VARCHAR(100) NOT NULL,
    "banner_subcategory" TEXT NOT NULL,
    "picture_subcategory" TEXT NOT NULL,
    "icon_subcategory" TEXT NOT NULL,
    "status_subcategory" VARCHAR(30) NOT NULL,
    "counter_views_subcategory" INTEGER NOT NULL,
    "description" VARCHAR(1000),
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subcategories_pkey" PRIMARY KEY ("id_subcategories")
);

-- CreateTable
CREATE TABLE "Worlds" (
    "id_worlds" TEXT NOT NULL,
    "name_world" VARCHAR(100) NOT NULL,
    "description" VARCHAR(1000),
    "founding_company" TEXT,
    "banner_world" TEXT NOT NULL,
    "picture_world" TEXT NOT NULL,
    "icon_world" TEXT,
    "video_world" TEXT,
    "status_world" VARCHAR(30) NOT NULL,
    "counter_views_world" INTEGER NOT NULL DEFAULT 0,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Worlds_pkey" PRIMARY KEY ("id_worlds")
);

-- CreateTable
CREATE TABLE "Products" (
    "id_products" TEXT NOT NULL,
    "average_qualification" INTEGER,
    "name_product" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "specifications" VARCHAR(1000),
    "details" VARCHAR(1000),
    "color" VARCHAR(50),
    "tags_product" VARCHAR(100),
    "video" TEXT,
    "main_image" TEXT NOT NULL,
    "gallery" TEXT,
    "image_3d" TEXT,
    "status" TEXT NOT NULL,
    "counter_view_product" INTEGER NOT NULL,
    "collection" TEXT,
    "stock" INTEGER,
    "offer" INTEGER,
    "highlight_level" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id_products")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id_orders" TEXT NOT NULL,
    "status_order" VARCHAR(50),
    "payment_method" VARCHAR(50) NOT NULL,
    "annotation" VARCHAR(150) NOT NULL,
    "discount_ticket" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id_orders")
);

-- CreateTable
CREATE TABLE "Sales" (
    "id_sales" TEXT NOT NULL,
    "status_sale" VARCHAR(30) NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("id_sales")
);

-- CreateTable
CREATE TABLE "Sales_Products" (
    "id_sales_procucts" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sale_price" INTEGER NOT NULL,
    "pay_rate" INTEGER,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sales_Products_pkey" PRIMARY KEY ("id_sales_procucts")
);

-- CreateTable
CREATE TABLE "Payment_Method" (
    "id_payment_method" TEXT NOT NULL,
    "payment_type" VARCHAR(50) NOT NULL,
    "card_number" INTEGER,
    "owner_name" TEXT,
    "account_number" INTEGER,
    "expiration_date_mm" INTEGER,
    "expiration_date_aa" INTEGER,
    "identification_doc" TEXT,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_Method_pkey" PRIMARY KEY ("id_payment_method")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id_transactions" TEXT NOT NULL,
    "type_transaction" TEXT,
    "value" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id_transactions")
);

-- CreateTable
CREATE TABLE "Wallets" (
    "id_wallets" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Wallets_pkey" PRIMARY KEY ("id_wallets")
);

-- CreateTable
CREATE TABLE "Deposit_Money" (
    "id_deposit_money" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Deposit_Money_pkey" PRIMARY KEY ("id_deposit_money")
);

-- CreateTable
CREATE TABLE "Disputes" (
    "id_disputes" TEXT NOT NULL,
    "dispute_matter" VARCHAR(500),
    "dispute_body" VARCHAR(1500) NOT NULL,
    "reply_seller" VARCHAR(1500),
    "status_dispute" VARCHAR(30),
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Disputes_pkey" PRIMARY KEY ("id_disputes")
);

-- CreateTable
CREATE TABLE "Posts" (
    "id_posts" TEXT NOT NULL,
    "message_matter" VARCHAR(1500),
    "message_body" VARCHAR(1500) NOT NULL,
    "reply_seller" VARCHAR(1500),
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id_posts")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_nike_name_key" ON "Users"("nike_name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
