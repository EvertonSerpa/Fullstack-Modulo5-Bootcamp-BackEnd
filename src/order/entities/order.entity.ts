import { Prisma } from '@prisma/client';

export class Order implements Prisma.OrderUncheckedCreateInput {
    order_status: string;
    payment_method: string;
    status: string;
}