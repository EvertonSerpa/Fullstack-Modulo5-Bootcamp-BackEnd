import { Prisma } from '@prisma/client';

export class Wishlist implements Prisma.wishlistsUncheckedCreateInput {
  id_wishlist?: string;
  id_user: string;
  id_products?: string;
  id_seller?: string;
  
}
