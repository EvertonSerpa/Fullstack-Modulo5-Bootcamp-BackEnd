import { Orders } from '../entities/orders.entity';
import { IsString, IsNumber } from 'class-validator';

export class CreateOrdersDto extends Orders {
  @IsString()
  status_order: string;

  @IsString()
  payment_method: string;

  @IsString()
  id_users: string;

  @IsString()
  id_product_order: string;
}
