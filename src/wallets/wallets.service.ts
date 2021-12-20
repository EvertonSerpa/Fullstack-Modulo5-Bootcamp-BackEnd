import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWalletsDto } from './dto/create-wallets.dto';
import { UpdateWalletsDto } from './dto/update-wallets.dto';

@Injectable()
export class WalletsService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UMA CARTEIRA

  async create(CreateWalletDto: CreateWalletsDto) {
    await this.prisma.wallets.create({
      data: {
        ...CreateWalletDto,
      },
    });

    return {
      mensage: 'Carteira cadastrada com sucesso!',
    };
  }

  // LISTO TODOS OS CARTEIRAS DESSA ROTA

  findAll() {
    return this.prisma.wallets.findMany();
  }

  // ENCONTRO UMA CARTEIRA POR ID

  findOne(id_wallets: string) {
    return this.prisma.wallets.findUnique({
      where: {
        id_wallets,
      },
    });
  }

  // ATUALIZA UMA CARTEIRA PELO ID

  async update(id_wallets: string, data: UpdateWalletsDto) {
    await this.prisma.wallets.update({
      where: { id_wallets },
      data,
    });

    return {
      mensage: 'Carteira atualizada com sucesso!',
    };
  }

  // DELETE UMA CARTEIRA PELO ID

  async remove(id_wallets: string) {
    await this.prisma.wallets.delete({
      where: { id_wallets },
    });

    return {
      message: 'Carteira deletada com sucesso!',
    };
  }
}
