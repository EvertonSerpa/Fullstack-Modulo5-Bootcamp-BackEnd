import { Sale } from "../entities/Sale";

export class CreateSaleDto extends Sale {
    id?: string;
    status_sale: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    productId: string;
}
