import { Prisma } from '@prisma/client';

export class Categorie implements Prisma.CategorieUncheckedCreateInput {
    id: string;
    name_category: string
    banner_category: string
    picture_category: string
    icon_category?: string
    status_category: boolean
    counter_views_category: number
    description?: string
    status: string;
    date_updated: Date | string;
    date_created: Date | string; 
}