import { Saleproduct } from "../entities/saleproduct.entity";

export class CreateSaleproductDto extends Saleproduct {
    quantity: number | null;
    sale_price: number 
    pay_rate: number | null;
}

