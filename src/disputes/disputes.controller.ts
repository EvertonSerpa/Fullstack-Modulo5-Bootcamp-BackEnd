import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisputesService } from './disputes.service';
import { CreateDisputesDto } from './dto/create-disputes.dto';
import { UpdateDisputesDto } from './dto/update-disputes.dto';

@Controller('dispute')
export class DisputesController {
  constructor(private readonly disputesService: DisputesService) {}

  @Post()
  create(@Body() createDisputeDto: CreateDisputesDto) {
    return this.disputesService.create(createDisputeDto);
  }

  @Get()
  findAll() {
    return this.disputesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disputesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisputeDto: UpdateDisputesDto) {
    return this.disputesService.update(id, updateDisputeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disputesService.remove(id);
  }
}
