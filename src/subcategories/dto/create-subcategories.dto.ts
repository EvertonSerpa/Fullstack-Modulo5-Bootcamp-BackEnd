import { Subcategories } from '../entities/subcategories.entity';
import { IsString, IsNumber } from 'class-validator';

// Quando extends a propriedade Subcategoria posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateSubcategoriesDto extends Subcategories {
  @IsString()
  subcategory_name: string;

  @IsString()
  subcategory_banner: string;

  @IsString()
  subcategory_image: string;

  @IsString()
  subcategory_icon: string;

  @IsString()
  subcategory_route: string;

  @IsString()
  subcategory_status: string;

  @IsNumber()
  subcategory_counter_views: number;

  @IsString()
  description?: string;
}
