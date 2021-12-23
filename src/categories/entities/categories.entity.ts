import { Prisma } from '@prisma/client';

export class Categories implements Prisma.CategoriesUncheckedCreateInput {
  id_categories?: string;
  name_category: string;
  banner_category: string;
  picture_category: string;
  icon_category?: string;
  status_category?: boolean;
  counter_views_category?: number;
  description?: string;
  date_updated?: string | Date;
  date_created?: string | Date;
  Subcategories?: Prisma.SubcategoriesUncheckedCreateNestedManyWithoutCategoriesInput;
  Products?: Prisma.ProductsUncheckedCreateNestedManyWithoutCategoriesInput;
}
