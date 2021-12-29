-- CreateTable
CREATE TABLE "categories" (
    "id_category" VARCHAR NOT NULL,
    "name_category" VARCHAR NOT NULL,
    "banner_category" VARCHAR NOT NULL,
    "picture_category" VARCHAR NOT NULL,
    "icon_category" VARCHAR,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,
    "status_category" VARCHAR NOT NULL,
    "counter_views_category" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "deposit_money" (
    "id_deposit" VARCHAR NOT NULL,
    "id_user" VARCHAR NOT NULL,
    "value" INTEGER NOT NULL,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "deposit_money_pkey" PRIMARY KEY ("id_deposit")
);

-- CreateTable
CREATE TABLE "disputes" (
    "id_dispute" VARCHAR NOT NULL,
    "id_order" VARCHAR NOT NULL,
    "id_user" VARCHAR NOT NULL,
    "id_seller" VARCHAR NOT NULL,
    "dispute_matter" VARCHAR NOT NULL,
    "dispute_body" TEXT NOT NULL,
    "reply_seller" TEXT,
    "status_dispute" VARCHAR,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,

    CONSTRAINT "disputes_pkey" PRIMARY KEY ("id_dispute")
);

-- CreateTable
CREATE TABLE "orders" (
    "id_order" VARCHAR NOT NULL,
    "id_user" VARCHAR NOT NULL,
    "id_product_order" VARCHAR NOT NULL,
    "status_order" VARCHAR NOT NULL,
    "payment_method" VARCHAR NOT NULL,
    "annotation" VARCHAR,
    "discount_ticket" INTEGER,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id_order")
);

-- CreateTable
CREATE TABLE "payment_method" (
    "id_method" VARCHAR NOT NULL,
    "id_user" VARCHAR NOT NULL,
    "payment_type" VARCHAR NOT NULL,
    "card_number" INTEGER,
    "owner_name" VARCHAR,
    "account_number" VARCHAR,
    "expiration_date_mm" INTEGER,
    "expiration_date_yy" INTEGER,
    "identification_doc" VARCHAR,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,

    CONSTRAINT "payment_method_pkey" PRIMARY KEY ("id_method")
);

-- CreateTable
CREATE TABLE "posts" (
    "id_message" VARCHAR NOT NULL,
    "id_product" VARCHAR NOT NULL,
    "id_user" VARCHAR NOT NULL,
    "id_seller" VARCHAR NOT NULL,
    "message_matter" VARCHAR,
    "message_body" TEXT NOT NULL,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id_message")
);

-- CreateTable
CREATE TABLE "products" (
    "id_product" VARCHAR NOT NULL,
    "id_category" VARCHAR NOT NULL,
    "id_subcategory" VARCHAR NOT NULL,
    "id_seller" VARCHAR NOT NULL,
    "id_world" VARCHAR NOT NULL,
    "average_qualification" INTEGER,
    "name_product" VARCHAR NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "specs" TEXT,
    "details" TEXT,
    "color" VARCHAR,
    "tags_product" VARCHAR,
    "video" VARCHAR,
    "main_picture" VARCHAR NOT NULL,
    "gallery" VARCHAR,
    "image_3d" VARCHAR,
    "status" VARCHAR,
    "counter_views_product" INTEGER NOT NULL DEFAULT 0,
    "collection" VARCHAR,
    "stock" INTEGER NOT NULL DEFAULT 1,
    "offer" INTEGER NOT NULL DEFAULT 0,
    "highlight_level" INTEGER NOT NULL DEFAULT 0,
    "featured" BOOLEAN NOT NULL DEFAULT true,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "qualification" (
    "id_qualification" VARCHAR NOT NULL,
    "id_qualified" VARCHAR,
    "id_product" VARCHAR,
    "value_qualification" INTEGER NOT NULL,
    "comment" VARCHAR,
    "id_qualifier" VARCHAR,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "qualification_pkey" PRIMARY KEY ("id_qualification")
);

-- CreateTable
CREATE TABLE "sales" (
    "id_sale" VARCHAR NOT NULL,
    "id_order" VARCHAR NOT NULL,
    "id_user" VARCHAR NOT NULL,
    "id_seller" VARCHAR NOT NULL,
    "id_payment_method" VARCHAR NOT NULL,
    "status_sale" VARCHAR,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id_sale")
);

-- CreateTable
CREATE TABLE "sales_products" (
    "id_itens" VARCHAR NOT NULL,
    "id_sales" VARCHAR,
    "id_product" VARCHAR,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "sale_price" INTEGER NOT NULL,
    "pay_rate" INTEGER,

    CONSTRAINT "sales_products_pkey" PRIMARY KEY ("id_itens")
);

-- CreateTable
CREATE TABLE "subcategories" (
    "id_subcategory" VARCHAR NOT NULL,
    "id_category" VARCHAR,
    "nome_subcategory" VARCHAR NOT NULL,
    "banner_subcategory" VARCHAR NOT NULL,
    "picture_subcategory" VARCHAR NOT NULL,
    "icono_subcategory" VARCHAR,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,
    "status_subcategory" VARCHAR NOT NULL,
    "counter_views_subcategory" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT,

    CONSTRAINT "subcategories_pkey" PRIMARY KEY ("id_subcategory")
);

-- CreateTable
CREATE TABLE "telephones" (
    "id_telephone" VARCHAR NOT NULL,
    "id_user" VARCHAR,
    "number_telephone" VARCHAR NOT NULL,
    "region_code" VARCHAR NOT NULL,
    "country_code" VARCHAR NOT NULL,

    CONSTRAINT "telephones_pkey" PRIMARY KEY ("id_telephone")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id_transaction" VARCHAR NOT NULL,
    "id_sale" VARCHAR,
    "type_transaction" VARCHAR NOT NULL,
    "value" INTEGER NOT NULL,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id_transaction")
);

-- CreateTable
CREATE TABLE "users" (
    "id_user" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "surname" VARCHAR,
    "profile_picture" VARCHAR,
    "nick_name" VARCHAR,
    "password" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "status" VARCHAR NOT NULL,
    "seller" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "banner" VARCHAR,
    "average_qualification" INTEGER,
    "counter_views_store" INTEGER NOT NULL DEFAULT 0,
    "role" VARCHAR,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "wallets" (
    "id_wallet" VARCHAR NOT NULL,
    "id_user" VARCHAR NOT NULL,
    "balance" VARCHAR NOT NULL,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,

    CONSTRAINT "wallets_pkey" PRIMARY KEY ("id_wallet")
);

-- CreateTable
CREATE TABLE "wishlists" (
    "id_wishlist" VARCHAR NOT NULL,
    "id_user" VARCHAR NOT NULL,
    "id_products" VARCHAR,
    "id_seller" VARCHAR,

    CONSTRAINT "wishlists_pkey" PRIMARY KEY ("id_wishlist")
);

-- CreateTable
CREATE TABLE "worlds" (
    "id_world" VARCHAR NOT NULL,
    "name_world" VARCHAR NOT NULL,
    "description" TEXT,
    "founding_company" VARCHAR,
    "picture_world" VARCHAR NOT NULL,
    "icon_world" VARCHAR,
    "banner_world" VARCHAR NOT NULL,
    "video_world" VARCHAR,
    "status_world" VARCHAR NOT NULL,
    "counter_views_world" INTEGER NOT NULL DEFAULT 0,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" DATE,

    CONSTRAINT "worlds_pkey" PRIMARY KEY ("id_world")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nick_name_key" ON "users"("nick_name");

-- AddForeignKey
ALTER TABLE "deposit_money" ADD CONSTRAINT "deposit_money_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "disputes" ADD CONSTRAINT "disputes_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "orders"("id_order") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "disputes" ADD CONSTRAINT "disputes_id_seller_fkey" FOREIGN KEY ("id_seller") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "disputes" ADD CONSTRAINT "disputes_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment_method" ADD CONSTRAINT "payment_method_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id_product") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_id_seller_fkey" FOREIGN KEY ("id_seller") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id_category") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_seller_fkey" FOREIGN KEY ("id_seller") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_subcategory_fkey" FOREIGN KEY ("id_subcategory") REFERENCES "subcategories"("id_subcategory") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_world_fkey" FOREIGN KEY ("id_world") REFERENCES "worlds"("id_world") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "qualification" ADD CONSTRAINT "qualification_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id_product") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "qualification" ADD CONSTRAINT "qualification_id_qualified_fkey" FOREIGN KEY ("id_qualified") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "qualification" ADD CONSTRAINT "qualification_id_qualifier_fkey" FOREIGN KEY ("id_qualifier") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "orders"("id_order") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_id_payment_method_fkey" FOREIGN KEY ("id_payment_method") REFERENCES "payment_method"("id_method") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_id_seller_fkey" FOREIGN KEY ("id_seller") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales_products" ADD CONSTRAINT "sales_products_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id_product") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales_products" ADD CONSTRAINT "sales_products_id_sales_fkey" FOREIGN KEY ("id_sales") REFERENCES "sales"("id_sale") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subcategories" ADD CONSTRAINT "subcategories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id_category") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "telephones" ADD CONSTRAINT "telephones_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_id_sale_fkey" FOREIGN KEY ("id_sale") REFERENCES "sales"("id_sale") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wallets" ADD CONSTRAINT "wallets_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wishlists" ADD CONSTRAINT "wishlists_id_products_fkey" FOREIGN KEY ("id_products") REFERENCES "products"("id_product") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wishlists" ADD CONSTRAINT "wishlists_id_seller_fkey" FOREIGN KEY ("id_seller") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wishlists" ADD CONSTRAINT "wishlists_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;
