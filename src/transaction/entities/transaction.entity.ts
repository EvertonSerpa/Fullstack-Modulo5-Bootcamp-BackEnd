import { Prisma } from "@prisma/client";

export class Transaction implements Prisma.TransactionUncheckedCreateInput {
    transaction?: string;
    value: number;
}
