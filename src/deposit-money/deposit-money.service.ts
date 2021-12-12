import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepositMoneyDto } from './dto/create-deposit-money.dto';
import { UpdateDepositMoneyDto } from './dto/update-deposit-money.dto';

@Injectable()
export class DepositMoneyService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UM DEPOSITO

  async create(CreateDepositMoneyDto: CreateDepositMoneyDto) {
    await this.prisma.deposit_Money.create({
      data: {
        ...CreateDepositMoneyDto,
      },
    });

    return {
      mensage: 'Deposito cadastrado com sucesso!',
    };
  }

  // LISTO TODOS OS DEPOSITOS DESSA ROTA

  findAll() {
    return this.prisma.deposit_Money.findMany();
  }

  // ENCONTRO UM DEPOSITO POR ID

  findOne(id: string) {
    return this.prisma.deposit_Money.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UM DEPOSITO PELO ID

  async update(id: string, data: UpdateDepositMoneyDto) {
    await this.prisma.deposit_Money.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Deposito atualizado com sucesso!',
    };
  }

  // DELETE UM DEPOSITO PELO ID

  async remove(id: string) {
    await this.prisma.deposit_Money.delete({
      where: { id },
    });

    return {
      message: 'Deposito deletado com sucesso!',
    };
  }
}

