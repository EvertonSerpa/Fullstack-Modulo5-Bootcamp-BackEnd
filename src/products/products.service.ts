import { Injectable } from '@nestjs/common';
import { Prisma, Products } from '@prisma/client'
import { PrismaService } from 'src/prisma.service';
import { ProductsRole } from './enum/role.enum'

@Injectable()
export class ProductsService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.ProductsCreateInput, role: ProductsRole): Promise<Products> {
    
    const products = await this.db.products.create({
      data,
    });

    return products;
  }
}
