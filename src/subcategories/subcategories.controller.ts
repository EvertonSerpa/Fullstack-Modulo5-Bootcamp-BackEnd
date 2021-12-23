import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { CreateSubcategoriesDto } from './dto/create-subcategories.dto';
import { UpdateSubcategoriesDto } from './dto/update-subcategories.dto';

@Controller('subcategorie')
export class SubcategoriesController {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @Post()
  create(@Body() createSubcategoriesDto: CreateSubcategoriesDto) {
    return this.subcategoriesService.create(createSubcategoriesDto);
  }

  @Get()
  findAll() {
    return this.subcategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcategoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubcategoriesDto: UpdateSubcategoriesDto,
  ) {
    return this.subcategoriesService.update(id, updateSubcategoriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcategoriesService.remove(id);
  }
}
