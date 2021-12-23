import { PaymentMethod } from '../entities/payment-method.entity';
import { IsString, IsNumber } from 'class-validator';

export class CreatePaymentMethodDto extends PaymentMethod {
  @IsString()
  payment_type: string;

  @IsNumber()
  card_number?: number;

  @IsString()
  owner_name?: string;

  @IsNumber()
  account_number?: number;

  @IsNumber()
  expiration_date_mm?: number;

  @IsNumber()
  expiration_date_yy?: number;

  @IsString()
  identification_doc?: string;

  @IsString()
  saleId: string;
}
