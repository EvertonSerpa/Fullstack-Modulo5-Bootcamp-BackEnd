import { Prisma } from "@prisma/client";

export class Wallets implements Prisma.WalletsUncheckedCreateInput {
    id_wallets?: string;
    balance: number;
    date_updated?: string | Date;
    date_created?: string | Date;
    salesId_sales: string;
}


