import { Controller, Body, Post } from '@nestjs/common';
import { Products } from '.prisma/client';
import { CreateProductsDto } from './dto/create-products.dto';
import { ProductsService } from './products.service';
import { ProductsRole } from './enum/role.enum';



// Definimos uma rota na nossa aplicação. 
@Controller()
export class  ProductsController {
    constructor(private service:  ProductsService) {}
    
    @Post('create-products')
    create(@Body() data: CreateProductsDto): Promise<Products> {
        return this.service.create(data, ProductsRole.USER);
    };
}
