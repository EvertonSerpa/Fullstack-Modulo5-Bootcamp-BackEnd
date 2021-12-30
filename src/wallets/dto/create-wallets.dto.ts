import { Wallets } from '../entities/wallets.entity';
import { IsNumber } from 'class-validator';

export class CreateWalletsDto extends Wallets {
  @IsNumber({}, { message: 'Infome um número' })
  balance: string;
}
