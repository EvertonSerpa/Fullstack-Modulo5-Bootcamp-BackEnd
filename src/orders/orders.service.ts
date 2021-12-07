import { Injectable } from '@nestjs/common';
import { Prisma, Orders } from '@prisma/client'
import { PrismaService } from 'src/prisma.service';
import { OrdersRole } from './enum/role.enum'

@Injectable()
export class OrdersService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.OrdersCreateInput, role: OrdersRole): Promise<Orders> {
    
    const orders = await this.db.orders.create({
      data,
    });

    return orders;
  }
}
