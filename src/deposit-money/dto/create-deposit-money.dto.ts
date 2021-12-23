import { DepositMoney } from '../entities/deposit-money.entity';
import { IsNumber } from 'class-validator';

export class CreateDepositMoneyDto extends DepositMoney {
  @IsNumber()
  value: number;
}
