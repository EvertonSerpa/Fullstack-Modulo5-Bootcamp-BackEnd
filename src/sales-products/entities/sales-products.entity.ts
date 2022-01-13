import { Prisma } from '@prisma/client';

export class SalesProducts
  implements Prisma.sales_productsUncheckedCreateInput
{
  id_itens: string;
  id_sales?: string;
  id_product?: string;
  quantity?: number;
  sale_price: number;
  pay_rate?: number;
}
