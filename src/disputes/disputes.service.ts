import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDisputesDto } from './dto/create-disputes.dto';
import { UpdateDisputesDto } from './dto/update-disputes.dto';

@Injectable()
export class DisputesService {
  constructor(private readonly prisma: PrismaService) {}

  // CRIA UMA TABELA DE DISPUTA

  async create(createDisputesDto: CreateDisputesDto) {
    await this.prisma.disputes.create({
      data: {
        ...createDisputesDto,
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

  findOne(id_dispute: string) {
    return this.prisma.disputes.findUnique({
      where: {
        id_dispute,
      },
    });
  }

  // ATUALIZA UMA TABELA DE DISPUTA PELO ID

  async update(id_dispute: string, data: UpdateDisputesDto) {
    await this.prisma.disputes.update({
      where: { id_dispute },
      data,
    });

    return {
      mensage: 'Disputa atualizado com sucesso!',
    };
  }

  // DELETE UMA TAELA DE DISPUTA PELO ID

  async remove(id_dispute: string) {
    await this.prisma.disputes.delete({
      where: { id_dispute },
    });

    return {
      message: 'Usuário deletado com sucesso!',
    };
  }
}
