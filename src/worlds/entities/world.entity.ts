import { Prisma } from '@prisma/client';
//import { prisma } from '../../config/db';

export class Worlds implements Prisma.worldsUncheckedCreateInput {
  id_world: string;
  name_world: string;
  description?: string;
  founding_company?: string;
  picture_world: string;
  icon_world?: string;
  banner_world: string;
  video_world?: string;
  status_world: string;
  counter_views_world?: number;
  date_created?: string | Date;
  date_updated?: string | Date;
  products?: Prisma.productsUncheckedCreateNestedManyWithoutWorldsInput;
}
