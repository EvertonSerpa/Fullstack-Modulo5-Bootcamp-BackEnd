import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class Telephone implements Prisma.TelephoneUncheckedCreateInput {
    number_telephone: number;
    region_code: number;
    country_code: number;
}

