import { Prisma } from '@prisma/client';

export class Qualification implements Prisma.qualificationUncheckedCreateInput {
  id_qualification: string;
  id_qualified?: string;
  id_product?: string;
  value_qualification: number;
  comment?: string;
  id_qualifier?: string;
  date_created?: string | Date;
}
