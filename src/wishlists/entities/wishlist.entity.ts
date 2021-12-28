import { Prisma } from '@prisma/client';

export class Wishlist implements Prisma.WishlistsUncheckedCreateInput {
  id_wishlist?: string;
  usersId_users: string;
  sellerId_users?: string;
  productsId_products?: string;
}
