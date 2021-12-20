import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletsDto } from './dto/create-wallets.dto';
import { UpdateWalletsDto } from './dto/update-wallets.dto';

@Controller('wallet')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  create(@Body() createWalletDto: CreateWalletsDto) {
    return this.walletsService.create(createWalletDto);
  }

  @Get()
  findAll() {
    return this.walletsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalletsDto: UpdateWalletsDto) {
    return this.walletsService.update(id, updateWalletsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletsService.remove(id);
  }
}
