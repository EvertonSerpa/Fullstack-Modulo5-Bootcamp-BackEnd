import { Categories } from "../entities/categories.entity";

export class CreateCategoriesDto extends Categories{
    name_category: string;
    banner_category: string;
    picture_category: string;
    icon_category: string | null;
    status_category: boolean;
    counter_views_category: number;
    description: string | null;
}




