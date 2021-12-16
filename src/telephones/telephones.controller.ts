import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelephonesService } from './telephones.service';
import { CreateTelephonesDto } from './dto/create-telephones.dto';
import { UpdateTelephonesDto } from './dto/update-telephones.dto';

@Controller('telephone')
export class TelephonesController {
  constructor(private readonly telephonesService: TelephonesService) {}

  @Post()
  create(@Body() createTelephonesDto: CreateTelephonesDto) {
    return this.telephonesService.create(createTelephonesDto);
  }

  @Get()
  findAll() {
    return this.telephonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telephonesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTelephonesDto: UpdateTelephonesDto) {
    return this.telephonesService.update(id, updateTelephonesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telephonesService.remove(id);
  }
}
