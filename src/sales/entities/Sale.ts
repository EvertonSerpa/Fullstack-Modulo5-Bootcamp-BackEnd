import { Prisma } from "@prisma/client";


export class Sales implements Prisma.SalesUncheckedCreateInput {
    id?: string;
    status_sale: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    productId: string;
    sale_ProductId: string;
    transactionId: string;
    disputeId: string;
    postId: string;
}
