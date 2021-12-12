import { PaymentMethod } from "../entities/payment-method.entity";

export class CreatePaymentMethodDto extends PaymentMethod {
    owner_name: string | null
    account_number: string | null;
    expiration_date_mm: number | null
    expiration_date_yy: number | null;
    identification_doc: string | null;
}
