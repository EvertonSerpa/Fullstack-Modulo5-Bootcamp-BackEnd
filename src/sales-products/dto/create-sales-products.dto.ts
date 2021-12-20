import { SalesProducts } from "../entities/sales-products.entity";

export class CreateSalesProductsDto extends SalesProducts {
    quantity: number | null;
    sale_price: number 
    pay_rate: number | null;
}

