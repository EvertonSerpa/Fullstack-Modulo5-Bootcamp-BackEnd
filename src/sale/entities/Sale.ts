import { Prisma } from "@prisma/client";


export class Sale implements Prisma.SaleUncheckedCreateInput {
    id?: string;
    status_sale: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    productId: string;
    sale_ProductId: string;
    transactionId: string;
    disputeId: string;
    postId: string;
    User?: Prisma.UserUncheckedCreateNestedManyWithoutSaleInput;
    Order?: Prisma.OrderUncheckedCreateNestedManyWithoutSaleInput;
    Payment_Method?: Prisma.Payment_MethodUncheckedCreateNestedManyWithoutSaleInput;
}
