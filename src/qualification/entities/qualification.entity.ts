import { Prisma } from '@prisma/client';

export class Qualification implements Prisma.QualificationUncheckedCreateInput {
    id?: string;
    value_qualification: number;
    comment?: string;
    nick_name?: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    userId: string;
    productId?: string;
}