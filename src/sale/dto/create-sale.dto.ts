import { Sale } from "../entities/sale.entity";

export class CreateSaleDto extends Sale {
    status_sale: string;
}
