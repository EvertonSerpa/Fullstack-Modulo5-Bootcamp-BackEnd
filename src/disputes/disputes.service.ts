import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDisputesDto } from './dto/create-disputes.dto';
import { UpdateDisputesDto } from './dto/update-disputes.dto';

@Injectable()
export class DisputesService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UMA TABELA DE DISPUTA

  async create(CreateDisputesDto: CreateDisputesDto) {
    await this.prisma.disputes.create({
      data: {
        ...CreateDisputesDto,
      },
    });

    return {
      mensage: 'Disputa cadastrada com sucesso!',
    };
  }

  // LISTA TODAS AS TABELAS DE DISPUTAS DESSA ROTA

  findAll() {
    return this.prisma.disputes.findMany();
  }

  // ENCONTRA UMA TABELA DE DISPUTA PELO ID

  findOne(id_disputes: string) {
    return this.prisma.disputes.findUnique({
      where: {
        id_disputes,
      },
    });
  }

  // ATUALIZA UMA TABELA DE DISPUTA PELO ID

  async update(id_disputes: string, data: UpdateDisputesDto) {
    await this.prisma.disputes.update({
      where: { id_disputes },
      data,
    });

    return {
      mensage: 'Disputa atualizado com sucesso!',
    };
  }

  // DELETE UMA TAELA DE DISPUTA PELO ID

  async remove(id_disputes: string) {
    await this.prisma.disputes.delete({
      where: { id_disputes },
    });

    return {
      message: 'Usuário deletado com sucesso!',
    };
  }
}
