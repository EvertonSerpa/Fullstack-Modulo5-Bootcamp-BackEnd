import { Transactions } from '../entities/transactions.entity';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateTransactionsDto extends Transactions {
  @IsString()
  transaction: string | null;

  @IsNotEmpty({ message: 'O campo value não pode ser vazio' })
  @IsNumber()
  value: number;
}
