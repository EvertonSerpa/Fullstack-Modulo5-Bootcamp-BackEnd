import { Prisma } from "@prisma/client";

export class Sale implements Prisma.SaleUncheckedCreateInput {
    id?: string;
    status_sale: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    productId: string;
    
}