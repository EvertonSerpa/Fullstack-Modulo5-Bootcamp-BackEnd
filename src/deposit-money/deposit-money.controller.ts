import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepositMoneyService } from './deposit-money.service';
import { CreateDepositMoneyDto } from './dto/create-deposit-money.dto';
import { UpdateDepositMoneyDto } from './dto/update-deposit-money.dto';

@Controller('deposit-money')
export class DepositMoneyController {
  constructor(private readonly depositMoneyService: DepositMoneyService) {}

  @Post()
  create(@Body() createDepositMoneyDto: CreateDepositMoneyDto) {
    return this.depositMoneyService.create(createDepositMoneyDto);
  }

  @Get()
  findAll() {
    return this.depositMoneyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depositMoneyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepositMoneyDto: UpdateDepositMoneyDto) {
    return this.depositMoneyService.update(id, updateDepositMoneyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depositMoneyService.remove(id);
  }
}
