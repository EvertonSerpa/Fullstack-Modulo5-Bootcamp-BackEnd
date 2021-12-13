import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class User implements Prisma.UserUncheckedCreateInput {
  name: string;
  surname: string;
  profile_picture: string;
  nike_name: string;
  password: string;
  email: string;
  status: string;
  seller: boolean;
  description?: string;
  banner: string;
  average_qualification?: number;
  conter_views_store: number;
}
