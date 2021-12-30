import { Prisma } from '@prisma/client';

export class Transactions implements Prisma.transactionsUncheckedCreateInput {
  id_transaction: string;
  id_sale?: string;
  type_transaction: string;
  value: number;
  date_created?: string | Date;
}
