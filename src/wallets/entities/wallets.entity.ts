import { Prisma } from '@prisma/client';

export class Wallets implements Prisma.walletsUncheckedCreateInput {
  id_wallet: string;
  id_user: string;
  balance: string;
  date_created?: string | Date;
  date_updated?: string | Date;
}
