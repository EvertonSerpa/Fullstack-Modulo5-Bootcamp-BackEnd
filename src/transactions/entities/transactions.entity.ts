import { Prisma } from '@prisma/client';

export class Transactions implements Prisma.TransactionsUncheckedCreateInput {
  id_transactions?: string;
  type_transaction?: string;
  value: number;
  date_updated?: string | Date;
  date_created?: string | Date;
}
