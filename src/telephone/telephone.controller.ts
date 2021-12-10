import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelephoneService } from './telephone.service';
import { CreateTelephoneDto } from './dto/create-telephone.dto';
import { UpdateTelephoneDto } from './dto/update-telephone.dto';

@Controller('telephone')
export class TelephoneController {
  constructor(private readonly telephoneService: TelephoneService) {}

  @Post()
  create(@Body() createTelephoneDto: CreateTelephoneDto) {
    return this.telephoneService.create(createTelephoneDto);
  }

  @Get()
  findAll() {
    return this.telephoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telephoneService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTelephoneDto: UpdateTelephoneDto) {
    return this.telephoneService.update(id, updateTelephoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telephoneService.remove(id);
  }
}
