import { Wallet } from "../entities/wallet.entity";

export class CreateWalletDto extends Wallet {
    balance: number;
}
