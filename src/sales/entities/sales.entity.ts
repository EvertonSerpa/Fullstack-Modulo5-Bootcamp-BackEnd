import { Prisma } from '@prisma/client';

export class Sales implements Prisma.SalesUncheckedCreateInput {
  id_sales?: string;
  status_sale: string;
  date_updated?: string | Date;
  date_created?: string | Date;
  salesId_users?: string;
  sellerId_users: string;
  ordersId_orders: string;
  Wallets?: Prisma.WalletsUncheckedCreateNestedManyWithoutSalesInput;
}
