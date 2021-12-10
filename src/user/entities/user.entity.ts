import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class User implements Prisma.UserUncheckedCreateInput {
  id: string;
  name: string;
  surname: string;
  image?: string;
  nike_name: string;
  password: string;
  wishlist_products?: string;
  wishlist_stores?: string;
  email: string;
  status: string;
  qualification?: string;
  date_updated?: Date | string;
  date_created?: Date | string;
}
