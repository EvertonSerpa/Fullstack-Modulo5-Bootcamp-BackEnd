import { Prisma } from "@prisma/client";

export class DepositMoney implements Prisma.Deposit_MoneyUncheckedUpdateInput {
    id_deposit_money?: string;
    value?: number;
    date_updated?: string;
    date_created?
}
