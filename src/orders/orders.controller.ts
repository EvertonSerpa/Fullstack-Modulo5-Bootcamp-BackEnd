import { Controller, Body, Post } from '@nestjs/common';
import { Orders } from '.prisma/client';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { OrdersService } from './orders.service';
import { OrdersRole } from './enum/role.enum';

// Definimos uma rota na nossa aplicação. 
@Controller()
export class OrdersController {
    constructor(private service: OrdersService) {}
    
    @Post('create-orders')
    create(@Body() data: CreateOrdersDto): Promise<Orders> {
        return this.service.create(data, OrdersRole.USER);
    };
}