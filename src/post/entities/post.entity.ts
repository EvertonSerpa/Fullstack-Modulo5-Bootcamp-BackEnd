import { Prisma } from '@prisma/client';

export class Posts implements Prisma.postsUncheckedCreateInput {
  id_message: string;
  id_product: string;
  id_user: string;
  id_seller: string;
  message_matter?: string;
  message_body: string;
  reply_seller?: string;
  date_updated?: string | Date;
  date_created?: string | Date;
  productsId_products: string;
  postsId_users: string;
  sellerId_users: string;
}
