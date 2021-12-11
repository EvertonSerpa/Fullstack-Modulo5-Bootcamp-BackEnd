import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDisputeDto } from './dto/create-dispute.dto';
import { UpdateDisputeDto } from './dto/update-dispute.dto';

@Injectable()
export class DisputeService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UMA TABELA DE DISPUTA

  async create(CreateDisputeDto: CreateDisputeDto) {
    await this.prisma.dispute.create({
      data: {
        ...CreateDisputeDto,
      },
    });

    return {
      mensage: 'Disputa cadastrada com sucesso!',
    };
  }

  // LISTA TODAS AS TABELAS DE DISPUTAS DESSA ROTA

  findAll() {
    return this.prisma.dispute.findMany();
  }

  // ENCONTRA UMA TABELA DE DISPUTA PELO ID

  findOne(id: string) {
    return this.prisma.dispute.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UMA TABELA DE DISPUTA PELO ID

  async update(id: string, data: UpdateDisputeDto) {
    await this.prisma.dispute.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Disputa atualizado com sucesso!',
    };
  }

  // DELETE UMA TAELA DE DISPUTA PELO ID

  async remove(id: string) {
    await this.prisma.dispute.delete({
      where: { id },
    });

    return {
      message: 'Usuário deletado com sucesso!',
    };
  }
}
