import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class Users implements Prisma.usersUncheckedCreateInput {
  id_user: string;
  name: string;
  surname?: string;
  profile_picture?: string;
  nick_name?: string;
  password: string;
  email: string;
  status: string;
  seller?: boolean;
  description?: string;
  banner?: string;
  average_qualification?: number;
  counter_views_store?: number;
  role?: string;
  date_created?: string | Date;
  date_updated?: string | Date;
  deposit_money?: Prisma.deposit_moneyUncheckedCreateNestedManyWithoutUsersInput;
  disputes_disputes_id_sellerTousers?: Prisma.disputesUncheckedCreateNestedManyWithoutUsers_disputes_id_sellerTousersInput;
  disputes_disputes_id_userTousers?: Prisma.disputesUncheckedCreateNestedManyWithoutUsers_disputes_id_userTousersInput;
  orders?: Prisma.ordersUncheckedCreateNestedManyWithoutUsersInput;
  payment_method?: Prisma.payment_methodUncheckedCreateNestedManyWithoutUsersInput;
  posts_posts_id_sellerTousers?: Prisma.postsUncheckedCreateNestedManyWithoutUsers_posts_id_sellerTousersInput;
  posts_posts_id_userTousers?: Prisma.postsUncheckedCreateNestedManyWithoutUsers_posts_id_userTousersInput;
  products?: Prisma.productsUncheckedCreateNestedManyWithoutUsersInput;
  qualification_qualification_id_qualifiedTousers?: Prisma.qualificationUncheckedCreateNestedManyWithoutUsers_qualification_id_qualifiedTousersInput;
  qualification_qualification_id_qualifierTousers?: Prisma.qualificationUncheckedCreateNestedManyWithoutUsers_qualification_id_qualifierTousersInput;
  sales_sales_id_sellerTousers?: Prisma.salesUncheckedCreateNestedManyWithoutUsers_sales_id_sellerTousersInput;
  sales_sales_id_userTousers?: Prisma.salesUncheckedCreateNestedManyWithoutUsers_sales_id_userTousersInput;
  telephones?: Prisma.telephonesUncheckedCreateNestedManyWithoutUsersInput;
  wallets?: Prisma.walletsUncheckedCreateNestedManyWithoutUsersInput;
  wishlists_usersTowishlists_id_seller?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUsers_usersTowishlists_id_sellerInput;
  wishlists_usersTowishlists_id_user?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUsers_usersTowishlists_id_userInput;
}
