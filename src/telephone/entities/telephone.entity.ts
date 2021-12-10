import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class Telephone implements Prisma.TelephoneUncheckedCreateInput {

    number: number;
    dd_code: number;
    date_updated?: Date | string;
    date_created?: Date | string;
 
}

