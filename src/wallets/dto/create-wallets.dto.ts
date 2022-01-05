import { Wallets } from "../entities/wallet.entity";
import { IsNumber } from "class-validator";

export class CreateWalletsDto extends Wallets {
    @IsNumber({}, { message: 'Informe um número.' })
    balance: number;
}
