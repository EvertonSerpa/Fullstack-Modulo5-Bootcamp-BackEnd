import { Prisma } from "@prisma/client";

export class PaymentMethod implements Prisma.Payment_MethodUncheckedCreateInput{
    id_payment_method?: string;
    payment_type: string;
    card_number?: number;
    owner_name?: string;
    account_number?: number;
    expiration_date_mm?: number;
    expiration_date_aa?: number;
    identification_doc?: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    usersId_users: string; 
}

