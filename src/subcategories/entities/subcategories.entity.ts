import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class Subcategories implements Prisma.subcategoriesUncheckedCreateInput {
  id_subcategory: string;
  id_category?: string;
  nome_subcategory: string;
  icono_subcategory?: string;
  products?: Prisma.productsUncheckedCreateNestedManyWithoutSubcategoriesInput;
  id_subcategories?: string;
  name_subcategory: string;
  banner_subcategory: string;
  picture_subcategory: string;
  icon_subcategory: string;
  status_subcategory: string;
  counter_views_subcategory: number;
  description?: string;
  date_updated?: string | Date;
  date_created?: string | Date;
  categoriesId_categories: string;
}
