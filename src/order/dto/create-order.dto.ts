import { Order } from "../entities/order.entity";

export class CreateOrderDto extends Order {
    order_status: string;
    payment_method: string;
    status: string;
}