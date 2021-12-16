import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesProductsDto } from './create-sales-products.dto';

export class UpdateSalesProductsDto extends PartialType(CreateSalesProductsDto) {}
