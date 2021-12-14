import { Order } from '../entities/order.entity';

export class CreateOrderDto extends Order {
  id?: string;
  order_status?: string;
  payment_method: string;
  annotation: string;
  discount_ticket: number;
  date_updated?: string | Date;
  date_created?: string | Date;
}
