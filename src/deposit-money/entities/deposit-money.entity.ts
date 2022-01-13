import { Prisma } from '@prisma/client';

export class DepositMoney implements Prisma.deposit_moneyUncheckedCreateInput {
  id_deposit: string;
  id_user: string;
  id_deposit_money?: string;
  value: number;
  date_updated?: string | Date;
  date_created?: string | Date;
  usersid_users: string;
}
