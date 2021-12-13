import { Prisma } from '@prisma/client';

export class Categorie implements Prisma.CategorieUncheckedCreateInput {
  id?: string;
  date_updated?: string | Date;
  date_created?: string | Date;
  subcategorieId: string;
  productId: string;
  name_category: string;
  banner_category: string;
  picture_category: string;
  icon_category?: string;
  status_category: boolean;
  counter_views_category: number;
  description?: string;

}
