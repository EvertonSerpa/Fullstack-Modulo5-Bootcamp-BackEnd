import { Orders } from '../entities/orders.entity';
import { IsString, IsNumber } from 'class-validator';

export class CreateOrdersDto extends Orders {
  @IsString()
  order_status?: string;

  @IsString()
  payment_method: string;

  @IsString()
  annotation: string;

  @IsNumber()
  discount_ticket: number;

  @IsString()
  usersId_users: string;
}
