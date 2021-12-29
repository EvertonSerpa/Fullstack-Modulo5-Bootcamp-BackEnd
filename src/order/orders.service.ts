import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { UpdateOrdersDto } from './dto/update-orders.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  // CADASTRAR ORDEM

  async create(createOrderDto: CreateOrdersDto) {
    await this.prisma.orders.create({
      data: {
        ...createOrderDto,
      },
    });

    return {
      mensage: 'Ordem cadastrada com sucesso!',
    };
  }

  // LISTA TODDOS AS ORDENS DESSA ROTA

  findAll() {
    return this.prisma.orders.findMany();
  }

  // ENCONTRA UMA ORDEM PEPLO ID

  findOne(id_order: string) {
    return this.prisma.orders.findUnique({
      where: {
        id_order,
      },
    });
  }

  // ATUALIZA UMA ORDEM PELO ID

  async update(id_order: string, data: UpdateOrdersDto) {
    await this.prisma.orders.update({
      where: { id_order },
      data,
    });

    return {
      mensage: 'Ordem atualizada com sucesso!',
    };
  }

  // DELETE UMA ORDEM PELO ID

  async remove(id_order: string) {
    await this.prisma.orders.delete({
      where: { id_order },
    });

    return {
      message: 'Ordem deletada com sucesso!',
    };
  }
}
