-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
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
    "orderId" TEXT NOT NULL,
    "saleId" TEXT NOT NULL,
    "payment_MethodId" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "deposit_MoneyId" TEXT NOT NULL,
    "disputeId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Telephone" (
    "id" TEXT NOT NULL,
    "number_telephone" INTEGER NOT NULL,
    "region_code" INTEGER NOT NULL,
    "country_code" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Telephone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcategorie" (
    "id" TEXT NOT NULL,
    "subcategory_name" VARCHAR(100) NOT NULL,
    "subcategory_banner" TEXT NOT NULL,
    "subcategory_image" TEXT NOT NULL,
    "subcategory_icon" TEXT NOT NULL,
    "subcategory_route" TEXT NOT NULL,
    "subcategory_status" VARCHAR(30) NOT NULL,
    "subcategory_counter_views" INTEGER NOT NULL,
    "description" VARCHAR(1000),
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Subcategorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "product_name" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "specifications" VARCHAR(1000),
    "details" VARCHAR(1000),
    "color" VARCHAR(50),
    "product_tags" VARCHAR(100),
    "video" TEXT,
    "main_image" TEXT NOT NULL,
    "gallery" TEXT,
    "image_3d" TEXT,
    "status" TEXT NOT NULL,
    "average_qualification" INTEGER,
    "counter_view_product" INTEGER NOT NULL,
    "platform" TEXT,
    "collection" TEXT,
    "stock" INTEGER,
    "discount" INTEGER,
    "highlight_level" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sale_ProductId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "order_status" VARCHAR(50),
    "payment_method" VARCHAR(50) NOT NULL,
    "annotation" VARCHAR(150) NOT NULL,
    "discount_ticket" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saleId" TEXT NOT NULL,
    "disputeId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id" TEXT NOT NULL,
    "name_category" VARCHAR(100) NOT NULL,
    "banner_category" TEXT NOT NULL,
    "picture_category" TEXT NOT NULL,
    "icon_category" TEXT,
    "status_category" BOOLEAN NOT NULL DEFAULT true,
    "counter_views_category" INTEGER NOT NULL DEFAULT 0,
    "description" VARCHAR(1000),
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subcategorieId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Qualification" (
    "id" TEXT NOT NULL,
    "value_qualification" INTEGER NOT NULL,
    "comment" VARCHAR(1000),
    "nick_name" VARCHAR(50),
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "productId" TEXT,
    "telephoneId" TEXT,

    CONSTRAINT "Qualification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL,
    "status_sale" VARCHAR(30) NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,
    "sale_ProductId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "disputeId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale_Product" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sale_price" INTEGER NOT NULL,
    "pay_rate" INTEGER,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sale_Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispute" (
    "id" TEXT NOT NULL,
    "dispute_matter" VARCHAR(500),
    "dispute_body" VARCHAR(1500) NOT NULL,
    "reply_seller" VARCHAR(1500),
    "status_dispute" VARCHAR(30),
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dispute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "message_matter" VARCHAR(1500),
    "message_body" VARCHAR(1500) NOT NULL,
    "reply_seller" VARCHAR(1500),
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment_Method" (
    "id" TEXT NOT NULL,
    "payment_type" VARCHAR(50) NOT NULL,
    "card_number" INTEGER,
    "owner_name" TEXT,
    "account_number" INTEGER,
    "expiration_date_mm" INTEGER,
    "expiration_date_yy" INTEGER,
    "identification_doc" TEXT,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saleId" TEXT NOT NULL,

    CONSTRAINT "Payment_Method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "ttype_transaction" TEXT,
    "value" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposit_Money" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Deposit_Money_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "World" (
    "id" TEXT NOT NULL,
    "name_world" VARCHAR(100) NOT NULL,
    "description" VARCHAR(1000),
    "founding_company" TEXT,
    "picture_world" TEXT NOT NULL,
    "icon_world" TEXT,
    "banner_world" TEXT NOT NULL,
    "video_world" TEXT,
    "status_world" VARCHAR(30) NOT NULL,
    "counter_views_world" INTEGER NOT NULL DEFAULT 0,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,

    CONSTRAINT "World_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nike_name_key" ON "User"("nike_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_payment_MethodId_fkey" FOREIGN KEY ("payment_MethodId") REFERENCES "Payment_Method"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_deposit_MoneyId_fkey" FOREIGN KEY ("deposit_MoneyId") REFERENCES "Deposit_Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_disputeId_fkey" FOREIGN KEY ("disputeId") REFERENCES "Dispute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telephone" ADD CONSTRAINT "Telephone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategorie" ADD CONSTRAINT "Subcategorie_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sale_ProductId_fkey" FOREIGN KEY ("sale_ProductId") REFERENCES "Sale_Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_disputeId_fkey" FOREIGN KEY ("disputeId") REFERENCES "Dispute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categorie" ADD CONSTRAINT "Categorie_subcategorieId_fkey" FOREIGN KEY ("subcategorieId") REFERENCES "Subcategorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categorie" ADD CONSTRAINT "Categorie_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qualification" ADD CONSTRAINT "Qualification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qualification" ADD CONSTRAINT "Qualification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qualification" ADD CONSTRAINT "Qualification_telephoneId_fkey" FOREIGN KEY ("telephoneId") REFERENCES "Telephone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_sale_ProductId_fkey" FOREIGN KEY ("sale_ProductId") REFERENCES "Sale_Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_disputeId_fkey" FOREIGN KEY ("disputeId") REFERENCES "Dispute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment_Method" ADD CONSTRAINT "Payment_Method_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "World" ADD CONSTRAINT "World_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
