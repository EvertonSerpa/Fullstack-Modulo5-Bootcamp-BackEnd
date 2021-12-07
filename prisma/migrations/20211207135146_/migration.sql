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

-- CreateIndex
CREATE UNIQUE INDEX "User_nike_name_key" ON "User"("nike_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
