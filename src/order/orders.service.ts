import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { UpdateOrdersDto } from './dto/update-orders.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR ORDEM

  async create(CreateOrderDto: CreateOrdersDto) {
    await this.prisma.orders.create({
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
    return this.prisma.orders.findMany();
  }

  // ENCONTRA UMA ORDEM PEPLO ID

  findOne( id_orders : string) {
    return this.prisma.orders.findUnique({
      where: {
         id_orders ,
      },
    });
  }

  // ATUALIZA UMA ORDEM PELO ID

  async update( id_orders : string, data: UpdateOrdersDto) {
    await this.prisma.orders.update({
      where: {  id_orders  },
      data,
    });

    return {
      mensage: 'Ordem atualizada com sucesso!',
    };
  }

  // DELETE UMA ORDEM PELO ID

  async remove( id_orders : string) {
    await this.prisma.orders.delete({
      where: {  id_orders  },
    });

    return {
      message: 'Ordem deletada com sucesso!',
    };
  }
}

