import { Prisma } from "@prisma/client";

export class PaymentMethod implements Prisma.Payment_MethodUncheckedCreateInput{
    owner_name?: string;
    account_number?: string;
    expiration_date_mm?: number;
    expiration_date_yy?: number;
    identification_doc?: string;
}

