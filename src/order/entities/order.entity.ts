import { Prisma } from '@prisma/client';

export class Order implements Prisma.OrderUncheckedCreateInput {
    id?: string;
    order_status?: string;
    payment_method: string;
    annotation: string;
    discount_ticket: number;
    date_updated?: string | Date;
    date_created?: string | Date;
    saleId: string;
    disputeId: string;
    User?: Prisma.UserUncheckedCreateNestedManyWithoutOrderInput;
}