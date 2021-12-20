import { Orders } from '../entities/orders.entity';

export class CreateOrdersDto extends Orders {
  id?: string;
  order_status?: string;
  payment_method: string;
  annotation: string;
  discount_ticket: number;
  date_updated?: string | Date;
  date_created?: string | Date;
}
