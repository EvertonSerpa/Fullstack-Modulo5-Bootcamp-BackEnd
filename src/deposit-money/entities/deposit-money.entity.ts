import { Prisma } from "@prisma/client";

export class DepositMoney implements Prisma.Deposit_MoneyUncheckedUpdateInput {
    value: number;
}
