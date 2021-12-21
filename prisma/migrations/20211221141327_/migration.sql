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
    "number_telephone" TEXT NOT NULL,
    "region_code" TEXT NOT NULL,
    "country_code" TEXT NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usersId_users" TEXT NOT NULL,

    CONSTRAINT "Telephones_pkey" PRIMARY KEY ("id_telephones")
);

-- CreateTable
CREATE TABLE "Wishlists" (
    "id_wishlist" TEXT NOT NULL,
    "usersId_users" TEXT NOT NULL,
    "sellerId_users" TEXT,
    "productsId_products" TEXT,

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
    "productsId_products" TEXT NOT NULL,
    "qualifiedId_users" TEXT,
    "qualifierId_users" TEXT NOT NULL,

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
    "categoriesId_categories" TEXT NOT NULL,

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
    "categoriesId_categories" TEXT NOT NULL,
    "subcategoriesId_subcategories" TEXT NOT NULL,
    "usersId_users" TEXT NOT NULL,
    "worldsId_worlds" TEXT NOT NULL,

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
    "usersId_users" TEXT NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id_orders")
);

-- CreateTable
CREATE TABLE "Sales" (
    "id_sales" TEXT NOT NULL,
    "status_sale" VARCHAR(30) NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "salesId_users" TEXT,
    "sellerId_users" TEXT NOT NULL,
    "ordersId_orders" TEXT NOT NULL,

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
    "usersId_users" TEXT NOT NULL,

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
    "salesId_sales" TEXT NOT NULL,

    CONSTRAINT "Wallets_pkey" PRIMARY KEY ("id_wallets")
);

-- CreateTable
CREATE TABLE "Deposit_Money" (
    "id_deposit_money" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usersid_users" TEXT NOT NULL,

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
    "ordersId_orders" TEXT NOT NULL,
    "disputesId_users" TEXT NOT NULL,
    "sellerId_users" TEXT NOT NULL,

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
    "productsId_products" TEXT NOT NULL,
    "postsId_users" TEXT NOT NULL,
    "sellerId_users" TEXT NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id_posts")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_nike_name_key" ON "Users"("nike_name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Wishlists_sellerId_users_key" ON "Wishlists"("sellerId_users");

-- CreateIndex
CREATE UNIQUE INDEX "Wishlists_productsId_products_key" ON "Wishlists"("productsId_products");

-- CreateIndex
CREATE UNIQUE INDEX "Qualification_qualifiedId_users_key" ON "Qualification"("qualifiedId_users");

-- CreateIndex
CREATE UNIQUE INDEX "Qualification_qualifierId_users_key" ON "Qualification"("qualifierId_users");

-- CreateIndex
CREATE UNIQUE INDEX "Sales_salesId_users_key" ON "Sales"("salesId_users");

-- CreateIndex
CREATE UNIQUE INDEX "Sales_sellerId_users_key" ON "Sales"("sellerId_users");

-- CreateIndex
CREATE UNIQUE INDEX "Disputes_disputesId_users_key" ON "Disputes"("disputesId_users");

-- CreateIndex
CREATE UNIQUE INDEX "Disputes_sellerId_users_key" ON "Disputes"("sellerId_users");

-- CreateIndex
CREATE UNIQUE INDEX "Posts_postsId_users_key" ON "Posts"("postsId_users");

-- CreateIndex
CREATE UNIQUE INDEX "Posts_sellerId_users_key" ON "Posts"("sellerId_users");

-- AddForeignKey
ALTER TABLE "Telephones" ADD CONSTRAINT "Telephones_usersId_users_fkey" FOREIGN KEY ("usersId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlists" ADD CONSTRAINT "Wishlists_usersId_users_fkey" FOREIGN KEY ("usersId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlists" ADD CONSTRAINT "Wishlists_sellerId_users_fkey" FOREIGN KEY ("sellerId_users") REFERENCES "Users"("id_users") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlists" ADD CONSTRAINT "Wishlists_productsId_products_fkey" FOREIGN KEY ("productsId_products") REFERENCES "Products"("id_products") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qualification" ADD CONSTRAINT "Qualification_productsId_products_fkey" FOREIGN KEY ("productsId_products") REFERENCES "Products"("id_products") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qualification" ADD CONSTRAINT "Qualification_qualifiedId_users_fkey" FOREIGN KEY ("qualifiedId_users") REFERENCES "Users"("id_users") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qualification" ADD CONSTRAINT "Qualification_qualifierId_users_fkey" FOREIGN KEY ("qualifierId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategories" ADD CONSTRAINT "Subcategories_categoriesId_categories_fkey" FOREIGN KEY ("categoriesId_categories") REFERENCES "Categories"("id_categories") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoriesId_categories_fkey" FOREIGN KEY ("categoriesId_categories") REFERENCES "Categories"("id_categories") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_subcategoriesId_subcategories_fkey" FOREIGN KEY ("subcategoriesId_subcategories") REFERENCES "Subcategories"("id_subcategories") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_usersId_users_fkey" FOREIGN KEY ("usersId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_worldsId_worlds_fkey" FOREIGN KEY ("worldsId_worlds") REFERENCES "Worlds"("id_worlds") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_usersId_users_fkey" FOREIGN KEY ("usersId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_ordersId_orders_fkey" FOREIGN KEY ("ordersId_orders") REFERENCES "Orders"("id_orders") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_salesId_users_fkey" FOREIGN KEY ("salesId_users") REFERENCES "Users"("id_users") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_sellerId_users_fkey" FOREIGN KEY ("sellerId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment_Method" ADD CONSTRAINT "Payment_Method_usersId_users_fkey" FOREIGN KEY ("usersId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallets" ADD CONSTRAINT "Wallets_salesId_sales_fkey" FOREIGN KEY ("salesId_sales") REFERENCES "Sales"("id_sales") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit_Money" ADD CONSTRAINT "Deposit_Money_usersid_users_fkey" FOREIGN KEY ("usersid_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disputes" ADD CONSTRAINT "Disputes_ordersId_orders_fkey" FOREIGN KEY ("ordersId_orders") REFERENCES "Orders"("id_orders") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disputes" ADD CONSTRAINT "Disputes_disputesId_users_fkey" FOREIGN KEY ("disputesId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disputes" ADD CONSTRAINT "Disputes_sellerId_users_fkey" FOREIGN KEY ("sellerId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_productsId_products_fkey" FOREIGN KEY ("productsId_products") REFERENCES "Products"("id_products") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_postsId_users_fkey" FOREIGN KEY ("postsId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_sellerId_users_fkey" FOREIGN KEY ("sellerId_users") REFERENCES "Users"("id_users") ON DELETE RESTRICT ON UPDATE CASCADE;
