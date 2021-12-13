import { Categorie } from "../entities/categorie.entity";

export class CreateCategorieDto extends Categorie{
    name_category: string;
    banner_category: string;
    picture_category: string;
    icon_category: string | null;
    status_category: boolean;
    counter_views_category: number;
    description: string | null;
}




