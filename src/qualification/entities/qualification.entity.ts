import { Prisma } from '@prisma/client';

export class Qualification implements Prisma.QualificationUncheckedCreateInput {
    value_qualification: number
    comment: string
    nick_name: string
    
}