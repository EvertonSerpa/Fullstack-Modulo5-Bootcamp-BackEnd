import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleproductService } from './saleproduct.service';
import { CreateSaleproductDto } from './dto/create-saleproduct.dto';
import { UpdateSaleproductDto } from './dto/update-saleproduct.dto';

@Controller('saleproduct')
export class SaleproductController {
  constructor(private readonly saleproductService: SaleproductService) {}

  @Post()
  create(@Body() createSaleproductDto: CreateSaleproductDto) {
    return this.saleproductService.create(createSaleproductDto);
  }

  @Get()
  findAll() {
    return this.saleproductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleproductService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleproductDto: UpdateSaleproductDto) {
    return this.saleproductService.update(id, updateSaleproductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleproductService.remove(id);
  }
}
