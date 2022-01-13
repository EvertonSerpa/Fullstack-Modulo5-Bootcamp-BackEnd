import { Sales } from '../entities/sales.entity';
import { IsString } from 'class-validator';

export class CreateSalesDto extends Sales {
  @IsString()
  id?: string;

  @IsString()
  status_sale: string;

  @IsString()
  productId: string;
}
