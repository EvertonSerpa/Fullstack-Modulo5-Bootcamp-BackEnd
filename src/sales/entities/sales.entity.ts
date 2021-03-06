import { Prisma } from '@prisma/client';

export class Sales implements Prisma.salesUncheckedCreateInput {
  id_sale: string;
  id_order: string;
  id_user: string;
  id_seller: string;
  id_payment_method: string;
  sales_products?: Prisma.sales_productsUncheckedCreateNestedManyWithoutSalesInput;
  transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutSalesInput;
  id_sales?: string;
  status_sale: string;
  date_updated?: string | Date;
  date_created?: string | Date;
  salesId_users?: string;
  sellerId_users: string;
  ordersId_orders: string;
}
