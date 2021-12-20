import { PaymentMethod } from "../entities/payment-method.entity";

export class CreatePaymentMethodDto extends PaymentMethod {
    payment_type: string;
    card_number?: number;
    owner_name?: string;
    account_number?: number;
    expiration_date_mm?: number;
    expiration_date_yy?: number;
    identification_doc?: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    saleId: string;
}
