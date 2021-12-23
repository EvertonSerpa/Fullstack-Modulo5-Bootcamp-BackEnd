import { Categories } from '../entities/categories.entity';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateCategoriesDto extends Categories {
  @IsString()
  name_category: string;

  @IsString()
  banner_category: string;

  @IsString()
  picture_category: string;

  @IsString()
  icon_category: string | null;

  @IsBoolean()
  status_category: boolean;

  @IsNumber()
  counter_views_category: number;

  @IsString()
  description: string | null;
}
