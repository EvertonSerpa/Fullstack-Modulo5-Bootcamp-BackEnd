import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionsDto } from './dto/create-transactions.dto';
import { UpdateTransactionsDto } from './dto/update-transactions.dto';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  // CRIA UMA TRANSAÇÃO

  async create(CreateTransactionsDto: CreateTransactionsDto) {
    await this.prisma.transactions.create({
      data: {
        ...CreateTransactionsDto,
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

  findOne( id_transactions: string) {
    return this.prisma.transactions.findUnique({
      where: {
        id_transactions,
      },
    });
  }

  // ATUALIZA UMA TRANSAÇÃO PELO ID

  async update(id_transactions: string, data: UpdateTransactionsDto) {
    await this.prisma.transactions.update({
      where: { id_transactions },
      data,
    });

    return {
      mensage: 'Transação atualizada com sucesso!',
    };
  }

  // DELETA UMA TRANSAÇÃO PELO ID

  async remove(id_transactions: string) {
    await this.prisma.transactions.delete({
      where: { id_transactions },
    });

    return {
      message: 'Transação deletada com sucesso!',
    };
  }
}
