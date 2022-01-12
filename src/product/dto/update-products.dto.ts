import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateProductsDto } from './create-products.dto';

export class UpdateProductsDto extends PartialType(CreateProductsDto) {
  @IsOptional()
  @IsNumber()
  average_qualification: number;

  @IsOptional()
  @IsString()
  specs: string;

  @IsOptional()
  @IsString()
  details: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsString()
  tags_product: string;

  @IsOptional()
  @IsString()
  video: string;

  @IsOptional()
  @IsString()
  gallery: string;

  @IsOptional()
  @IsString()
  image_3d: string;

  @IsOptional()
  @IsString()
  collection: string;

  @IsOptional()
  @IsString()
  @IsIn(['ativo', 'inativo', 'suspenso', 'esgotado'])
  status: string;
}
