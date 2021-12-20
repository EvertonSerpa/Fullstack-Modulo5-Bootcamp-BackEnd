import { Transactions } from "../entities/transactions.entity";

export class CreateTransactionsDto extends Transactions {
    transaction: string | null;
    value: number;
}
