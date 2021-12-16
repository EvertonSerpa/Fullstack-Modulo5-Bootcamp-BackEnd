import { Prisma } from "@prisma/client";

export class SalesProducts implements Prisma.Sales_ProductsUncheckedCreateInput{
    id_sales_procucts?: string;
    quantity: number;
    sale_price: number;
    pay_rate?: number;
    date_updated?: string | Date;
    date_created?: string | Date;
}
