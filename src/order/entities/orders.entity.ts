import { Prisma } from '@prisma/client';

export class Orders implements Prisma.ordersUncheckedCreateInput {
  id_order: string;
  id_user: string;
  id_product_order: string;
  status_order: string;
  payment_method: string;
  annotation?: string;
  discount_ticket?: number;
  date_created?: string | Date;
  date_updated?: string | Date;
  disputes?: Prisma.disputesUncheckedCreateNestedManyWithoutOrdersInput;
  sales?: Prisma.salesUncheckedCreateNestedManyWithoutOrdersInput;
}
