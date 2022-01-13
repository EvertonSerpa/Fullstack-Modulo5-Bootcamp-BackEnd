import { Prisma } from '@prisma/client';

export class Disputes implements Prisma.disputesUncheckedCreateInput {
  id_dispute: string;
  id_order: string;
  id_user: string;
  id_seller: string;
  dispute_matter: string;
  dispute_body: string;
  reply_seller?: string;
  status_dispute?: string;
  date_created?: string | Date;
  date_updated?: string | Date;
}
