import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleproductDto } from './create-saleproduct.dto';

export class UpdateSaleproductDto extends PartialType(CreateSaleproductDto) {}
