import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionsDto } from './dto/create-transactions.dto';
import { UpdateTransactionsDto } from './dto/update-transactions.dto';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  // CRIA UMA TRANSAÇÃO

  async create(createTransactionsDto: CreateTransactionsDto) {
    await this.prisma.transactions.create({
      data: {
        ...(createTransactionsDto as unknown as Prisma.transactionsUncheckedCreateInput),
      },
    });

    return {
      mensage: 'Transação cadastrada com sucesso!',
    };
  }

  // LISTA TODAS AS TABELAS DE TRASAÇÃO DESSA ROTA

  findAll() {
    return this.prisma.transactions.findMany();
  }

  // ENCONTRO UMA TRANSAÇÃO POR ID

  findOne(id_transaction: string) {
    return this.prisma.transactions.findUnique({
      where: {
        id_transaction,
      },
    });
  }

  // ATUALIZA UMA TRANSAÇÃO PELO ID

  async update(id_transaction: string, data: UpdateTransactionsDto) {
    await this.prisma.transactions.update({
      where: { id_transaction },
      data,
    });

    return {
      mensage: 'Transação atualizada com sucesso!',
    };
  }

  // DELETA UMA TRANSAÇÃO PELO ID

  async remove(id_transaction: string) {
    await this.prisma.transactions.delete({
      where: { id_transaction },
    });

    return {
      message: 'Transação deletada com sucesso!',
    };
  }
}
