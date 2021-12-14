import { Prisma } from "@prisma/client";

export class Saleproduct implements Prisma.Sale_ProductUncheckedCreateInput{
    id?: string;
    quantity: number;
    sale_price: number;
    pay_rate?: number;
    date_updated?: string | Date;
    date_created?: string | Date;
    Product?: Prisma.ProductUncheckedCreateNestedManyWithoutSale_ProductInput;
    Sale?: Prisma.SaleUncheckedCreateNestedManyWithoutSale_ProductInput;
}
