import { Prisma } from '@prisma/client';

export class Orders implements Prisma.OrdersUncheckedCreateInput {
  id_orders?: string;
  status_order?: string;
  payment_method: string;
  annotation: string;
  discount_ticket: number;
  date_updated?: string | Date;
  date_created?: string | Date;
  usersId_users: string;
  Sales?: Prisma.SalesUncheckedCreateNestedManyWithoutOrdersInput;
  Disputes?: Prisma.DisputesUncheckedCreateNestedManyWithoutOrdersInput;
}
