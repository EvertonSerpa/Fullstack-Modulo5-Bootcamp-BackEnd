import { SalesProducts } from "../entities/sales-products.entity";
import { IsNumber } from "class-validator";

export class CreateSalesProductsDto extends SalesProducts {

    @IsNumber()
    quantity: number | null;

    @IsNumber()
    sale_price: number
    
    @IsNumber()
    pay_rate: number | null;
}

