import { Prisma } from "@prisma/client";

export class Sale implements Prisma.SaleUncheckedCreateInput {
    status_sale: string
}