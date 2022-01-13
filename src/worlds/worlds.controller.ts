import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorldsService } from './worlds.service';
import { CreateWorldsDto } from './dto/create-worlds.dto';
import { UpdateWorldsDto } from './dto/update-worlds.dto';

@Controller('world')
export class WorldsController {
  constructor(private readonly worldsService: WorldsService) {}

  @Post()
  create(@Body() createWorldsDto: CreateWorldsDto) {
    return this.worldsService.create(createWorldsDto);
  }

  @Get()
  findAll() {
    return this.worldsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.worldsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorldsDto: UpdateWorldsDto) {
    return this.worldsService.update(id, updateWorldsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worldsService.remove(id);
  }
}
