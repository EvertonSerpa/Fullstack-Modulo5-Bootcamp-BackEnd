import { PartialType } from '@nestjs/mapped-types';
import { CreateSubcategoriesDto } from './create-subcategories.dto';

export class UpdateSubcategoriesDto extends PartialType(
  CreateSubcategoriesDto,
) {}
