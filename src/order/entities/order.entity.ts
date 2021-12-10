import { Prisma } from '@prisma/client';

export class Order implements Prisma.OrderUncheckedCreateInput {
    id: string;
    order_status: string;
    payment_method: string;
    status: string;
    date_updated: Date | string;
    date_created: Date | string; 
}