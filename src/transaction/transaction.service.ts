import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  // CRIA UMA TRANSAÇÃO

  async create(CreateTransactionDto: CreateTransactionDto) {
    await this.prisma.transaction.create({
      data: {
        ...CreateTransactionDto,
      },
    });

    return {
      mensage: 'Transação cadastrada com sucesso!',
    };
  }

  // LISTA TODAS AS TABELAS DE TRASAÇÃO DESSA ROTA

  findAll() {
    return this.prisma.transaction.findMany();
  }

  // ENCONTRO UMA TRANSAÇÃO POR ID

  findOne(id: string) {
    return this.prisma.transaction.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UMA TRANSAÇÃO PELO ID

  async update(id: string, data: UpdateTransactionDto) {
    await this.prisma.transaction.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Transação atualizada com sucesso!',
    };
  }

  // DELETA UMA TRANSAÇÃO PELO ID

  async remove(id: string) {
    await this.prisma.transaction.delete({
      where: { id },
    });

    return {
      message: 'Transação deletada com sucesso!',
    };
  }
}
