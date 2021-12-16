import { Prisma } from '@prisma/client';

// O Unchecked vai ter a informação do id, que para a entidade isso vai ser necessario.

export class Telephones implements Prisma.TelephonesUncheckedCreateInput {
    id_telephones?: string;
    number_telephone: number;
    region_code: number;
    country_code: number;
    date_updated?: string | Date;
    date_created?: string | Date;
}

