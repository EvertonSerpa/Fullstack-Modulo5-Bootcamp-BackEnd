import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesProductsService } from './sales-products.service';
import { CreateSalesProductsDto } from './dto/create-sales-products.dto';
import { UpdateSalesProductsDto } from './dto/update-sales-products.dto';

@Controller('saleproduct')
export class SaleproductController {
  constructor(private readonly saleproductService: SalesProductsService) {}

  @Post()
  create(@Body() createSaleproductDto: CreateSalesProductsDto) {
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
  update(@Param('id') id: string, @Body() updateSaleproductDto: UpdateSalesProductsDto) {
    return this.saleproductService.update(id, updateSaleproductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleproductService.remove(id);
  }
}
