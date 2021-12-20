import { Sales } from "../entities/sales.entity";

export class CreateSalesDto extends Sales {
    id?: string;
    status_sale: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    productId: string;
}
