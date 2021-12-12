import { Prisma } from "@prisma/client";

export class Wallet implements Prisma.WalletUncheckedCreateInput {
    balance: number;
}


