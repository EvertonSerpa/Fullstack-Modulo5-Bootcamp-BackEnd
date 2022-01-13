import { Wallets } from '../entities/wallet.entity';
import { IsNumber, IsString } from 'class-validator';

export class CreateWalletsDto extends Wallets {
  @IsNumber({}, { message: 'Informe um número.' })
  balance: number;

  @IsString({ message: 'Informe o id do usuário.' })
  id_user: string;
}
