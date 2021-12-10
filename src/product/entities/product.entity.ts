import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class Product implements Prisma.ProductUncheckedCreateInput {

    id: string;
    product_name?: string;
    price?: number;
    description?: string;
    specifications?: string;
    details?: string;
    product_route?: string;
    product_tags?: string;
    video?: string;
    main_image?: string;
    gallery?: string;
    image_3d?: string;
    status?: string;
    qualification?: string;
    counter_view_product: number;
    platform?: string;
    collection?: string;
    the_mount?: number;
    discount?: number;
    turbo_level: number;
    date_updated?: Date | string;
    date_created?: Date | string;
}