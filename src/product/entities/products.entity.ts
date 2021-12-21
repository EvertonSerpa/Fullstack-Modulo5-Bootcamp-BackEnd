import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class Products implements Prisma.ProductsUncheckedCreateInput {
    id_products?: string;
    average_qualification?: number;
    name_product: string;
    price: number;
    description: string;
    specifications?: string;
    details?: string;
    color?: string;
    tags_product?: string;
    video?: string;
    main_image: string;
    gallery?: string;
    image_3d?: string;
    status: string;
    counter_view_product: number;
    collection?: string;
    stock?: number;
    offer?: number;
    highlight_level: number;
    date_updated?: string | Date;
    date_created?: string | Date;
    categoriesId_categories: string;
    subcategoriesId_subcategories: string;
    usersId_users: string;
    worldsId_worlds: string;
    Wishlists?: Prisma.WishlistsUncheckedCreateNestedOneWithoutProductsInput;
    Qualification?: Prisma.QualificationUncheckedCreateNestedManyWithoutProductsInput;
    Posts?: Prisma.PostsUncheckedCreateNestedManyWithoutProductsInput;
}