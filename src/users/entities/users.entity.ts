import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class Users implements Prisma.UsersUncheckedCreateInput {
  name: string;
  surname: string;
  profile_picture: string;
  nike_name: string;
  password: string;
  email: string;
  status: string;
  seller?: boolean;
  description?: string;
  banner: string;
  average_qualification?: number;
  conter_views_store: number;
  role?: string;
  date_updated?: string | Date;
  date_created?: string | Date;
  Telephones?: Prisma.TelephonesUncheckedCreateNestedManyWithoutUsersInput;
  writtenWishlists?: Prisma.WishlistsUncheckedCreateNestedManyWithoutUsersInput;
  sellerWishlists?: Prisma.WishlistsUncheckedCreateNestedOneWithoutSellerInput;
  writtenQualified?: Prisma.QualificationUncheckedCreateNestedOneWithoutQualifiedInput;
  qualifier?: Prisma.QualificationUncheckedCreateNestedManyWithoutQualifierInput;
  UserSales?: Prisma.SalesUncheckedCreateNestedManyWithoutUserSalesInput;
  Seller?: Prisma.SalesUncheckedCreateNestedManyWithoutSellerInput;
  UserDisputes?: Prisma.DisputesUncheckedCreateNestedManyWithoutUserDisputesInput;
  DisputesSeller?: Prisma.DisputesUncheckedCreateNestedManyWithoutDisputesSellerInput;
  UserPosts?: Prisma.PostsUncheckedCreateNestedManyWithoutUserPostsInput;
  PostsSeller?: Prisma.PostsUncheckedCreateNestedManyWithoutPostsSellerInput;
  Orders?: Prisma.OrdersUncheckedCreateNestedManyWithoutUsersInput;
  Payment_Method?: Prisma.Payment_MethodUncheckedCreateNestedManyWithoutUsersInput;
  Deposit_Money?: Prisma.Deposit_MoneyUncheckedCreateNestedManyWithoutUsersInput;
  Products?: Prisma.ProductsUncheckedCreateNestedManyWithoutSellerInput;
  id_users?: string;
}
