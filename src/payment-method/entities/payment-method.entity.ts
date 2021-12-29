import { Prisma } from '@prisma/client';

export class PaymentMethod
  implements Prisma.payment_methodUncheckedCreateInput
{
  id_method: string;
  id_user: string;
  payment_type: string;
  card_number?: number;
  owner_name?: string;
  account_number?: string;
  expiration_date_mm?: number;
  expiration_date_yy?: number;
  identification_doc?: string;
  date_created?: string | Date;
  date_updated?: string | Date;
  sales?: Prisma.salesUncheckedCreateNestedManyWithoutPayment_methodInput;
}
