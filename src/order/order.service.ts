import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR ORDEM

  async create(CreateOrderDto: CreateOrderDto) {
    await this.prisma.order.create({
      data: {
        ...CreateOrderDto,
      },
    });

    return {
      mensage: 'Ordem cadastrada com sucesso!',
    };
  }

  // LISTA TODDOS AS ORDENS DESSA ROTA

  findAll() {
    return this.prisma.order.findMany();
  }

  // ENCONTRA UMA ORDEM PEPLO ID

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UMA ORDEM PELO ID

  async update(id: string, data: UpdateOrderDto) {
    await this.prisma.order.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Ordem atualizada com sucesso!',
    };
  }

  // DELETE UMA ORDEM PELO ID

  async remove(id: string) {
    await this.prisma.order.delete({
      where: { id },
    });

    return {
      message: 'Ordem deletada com sucesso!',
    };
  }
}

