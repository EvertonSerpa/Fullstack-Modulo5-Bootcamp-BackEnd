import { Wallets } from "../entities/wallets.entity";

export class CreateWalletsDto extends Wallets {
    balance: number;
}
