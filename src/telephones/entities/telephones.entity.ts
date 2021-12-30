import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class Telephones implements Prisma.telephonesUncheckedCreateInput {
  id_telephone: string;
  id_user?: string;
  number_telephone: string;
  region_code: string;
  country_code: string;
  date_updated?: string | Date;
  date_created?: string | Date;
  usersId_users: string;
}
