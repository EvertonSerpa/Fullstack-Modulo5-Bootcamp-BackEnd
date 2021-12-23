import { Products } from '../entities/products.entity';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductsDto extends Products {
  @IsString()
  product_name: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  specifications?: string;

  @IsString()
  details?: string;

  @IsString()
  color?: string;

  @IsString()
  product_tags?: string;

  @IsString()
  video?: string;

  @IsString()
  main_image: string;

  @IsString()
  gallery?: string;

  @IsString()
  image_3d?: string;

  @IsString()
  status: string;

  @IsNumber()
  average_qualification?: number;

  @IsNumber()
  counter_view_product: number;

  @IsString()
  platform?: string;

  @IsString()
  collection?: string;

  @IsNumber()
  stock?: number;

  @IsNumber()
  discount?: number;

  @IsNumber()
  highlight_level: number;
}
