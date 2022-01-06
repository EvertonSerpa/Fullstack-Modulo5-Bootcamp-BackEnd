import { Injectable } from '@nestjs/common';
import { CreateWalletsDto } from './dto/create-wallets.dto';
import { UpdateWalletsDto } from './dto/update-wallets.dto';
import {  prisma } from '../config/db';

@Injectable()
export class WalletsService {

   // CRIA UMA CARTEIRA

  async create(CreateWalletsDto: CreateWalletsDto) {
    await prisma.wallets.create({
      data: {
        ...CreateWalletsDto,
      },
    });

    return {
      mensage: 'Carteira criada com sucesso!'
    };
  }

  // LISTO TODAS AS CARTEIRAS DESSA ROTA

  async findAll() {
    return await prisma.wallets.findMany();
  }

  async findOne(id_wallet: string) {
    return await prisma.wallets.findUnique({
      where: {
        id_wallet,
      },
    });
  }

 // ATUALIZA A CARTEIRA PELO ID

  async update(id_wallet: string, data: UpdateWalletsDto) {
    await prisma.wallets.update({
      where: { id_wallet },
      data,
    });

    return {
      mensage: 'Carteira atualizada com sucesso!',
    }
  }

  // DELETE UMA CARTEIRA PELO ID

  async remove(id_wallet: string) {
    await prisma.wallets.delete({
      where: { id_wallet }
    });

    return {
      mesage: 'Carteira deletada com sucesso!'
    }
  }
}
