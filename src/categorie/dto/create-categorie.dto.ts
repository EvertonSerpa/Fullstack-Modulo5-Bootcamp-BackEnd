export class CreateCategorieDto {
    id: string;
    name_category: string;
    banner_category: string;
    picture_category: string | null
    icon_category: string | null;
    status_category: boolean;
    counter_views_category: number;
    description: string | null;
    status: string;
}
