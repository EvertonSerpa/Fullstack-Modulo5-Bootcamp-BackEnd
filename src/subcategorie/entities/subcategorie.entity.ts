import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class Subcategorie implements Prisma.subcategorieUncheckedCreateInput {

    id: string;
    subcategory_name: string;
    subcategory_banner: string;
    subcategory_image: string;
    subcategory_icon: string;
    subcategory_route: string;
    subcategory_status: string;
    subcategory_counter_views: number;
    description?: string;
    date_updated?: Date | string;
    date_created?: Date | string;
}
