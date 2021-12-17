import { Prisma } from '@prisma/client';

export class Qualification implements Prisma.QualificationUncheckedCreateInput {
    id_qualification?: string;
    value_qualification: number;
    comment?: string;
    nick_name?: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    productsId_products: string;
    qualifiedId_users?: string;
    qualifierId_users: string;
}