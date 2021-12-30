import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepositMoneyDto } from './dto/create-deposit-money.dto';
import { UpdateDepositMoneyDto } from './dto/update-deposit-money.dto';

@Injectable()
export class DepositMoneyService {
  constructor(private readonly prisma: PrismaService) {}

  // CRIA UMA TABELA DE DEPOSITO DE DINHEIRO

  async create(createDepositMoneyDto: CreateDepositMoneyDto) {
    await this.prisma.deposit_money.create({
      data: {
        ...createDepositMoneyDto,
      },
    });

    return {
      mensage: 'Deposito cadastrado com sucesso!',
    };
  }

  // LISTA TODAS AS TABELAS DE DEPOSITOS DESSA ROTA

  findAll() {
    return this.prisma.deposit_money.findMany();
  }

  // ENCONTRA UMA TABELA DE DEPOSITO PELO ID

  findOne(id_deposit: string) {
    return this.prisma.deposit_money.findUnique({
      where: {
        id_deposit,
      },
    });
  }

  // ATUALIZA UMA TABELA DE DEPOSITO PELO ID

  async update(id_deposit: string, data: UpdateDepositMoneyDto) {
    await this.prisma.deposit_money.update({
      where: { id_deposit },
      data,
    });

    return {
      mensage: 'Deposito atualizado com sucesso!',
    };
  }

  // DELETE UMA TAELA DE DISPUTA PELO ID

  async remove(id_deposit: string) {
    await this.prisma.deposit_money.delete({
      where: { id_deposit },
    });

    return {
      message: 'Deposito deletado com sucesso!',
    };
  }
}
