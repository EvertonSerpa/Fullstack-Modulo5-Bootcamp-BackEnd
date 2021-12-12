import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UMA CARTEIRA

  async create(CreateWalletDto: CreateWalletDto) {
    await this.prisma.wallet.create({
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
    return this.prisma.wallet.findMany();
  }

  // ENCONTRO UMA CARTEIRA POR ID

  findOne(id: string) {
    return this.prisma.wallet.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UMA CARTEIRA PELO ID

  async update(id: string, data: UpdateWalletDto) {
    await this.prisma.wallet.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Carteira atualizada com sucesso!',
    };
  }

  // DELETE UMA CARTEIRA PELO ID

  async remove(id: string) {
    await this.prisma.wallet.delete({
      where: { id },
    });

    return {
      message: 'Carteira deletada com sucesso!',
    };
  }
}
