import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubcategorieService } from './subcategorie.service';
import { CreateSubcategorieDto } from './dto/create-subcategorie.dto';
import { UpdateSubcategorieDto } from './dto/update-subcategorie.dto';

@Controller('subcategorie')
export class SubcategorieController {
  constructor(private readonly subcategorieService: SubcategorieService) {}

  @Post()
  create(@Body() createSubcategorieDto: CreateSubcategorieDto) {
    return this.subcategorieService.create(createSubcategorieDto);
  }

  @Get()
  findAll() {
    return this.subcategorieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcategorieService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubcategorieDto: UpdateSubcategorieDto) {
    return this.subcategorieService.update(id, updateSubcategorieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcategorieService.remove(id);
  }
}
