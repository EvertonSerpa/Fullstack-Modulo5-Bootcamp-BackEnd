import { Prisma } from "@prisma/client";

export class Saleproduct implements Prisma.Sale_ProductUncheckedCreateInput{
    quantity?: number;
    sale_price: number;
    pay_rate?: number;
}
