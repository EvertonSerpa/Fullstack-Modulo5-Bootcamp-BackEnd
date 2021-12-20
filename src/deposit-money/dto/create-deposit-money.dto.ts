import { DepositMoney } from "../entities/deposit-money.entity";

export class CreateDepositMoneyDto extends DepositMoney {
    value: number;
}
