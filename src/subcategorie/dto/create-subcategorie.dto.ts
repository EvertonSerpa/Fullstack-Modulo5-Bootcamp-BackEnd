import { Subcategorie } from "../entities/subcategorie.entity";

// Quando extends a propriedade Subcategoria posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateSubcategorieDto extends Subcategorie {
    subcategory_name: string;
    subcategory_banner: string;
    subcategory_image: string;
    subcategory_icon: string;
    subcategory_route: string;
    subcategory_status: string;
    subcategory_counter_views: number;
    description?: string;
}
