import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR PRODUTO

  async create(CreateProductsDto: CreateProductsDto) {
    await this.prisma.products.create({
      data: {
        ...CreateProductsDto,
      },
    });

    return {
      mensage: 'Produto cadastrado com sucesso!',
    };
  }

  // LISTA TODDOS OS PRODUTOS DESSA ROTA

  findAll() {
    return this.prisma.products.findMany();
  }

  // ENCONTRA UM PRODUTO PEPLO ID

  findOne(id_products: string) {
    return this.prisma.products.findUnique({
      where: {
        id_products,
      },
    });
  }

  // ATUALIZA UM PRODUTO PELO ID

  async update(id_products: string, data: UpdateProductsDto) {
    await this.prisma.products.update({
      where: { id_products },
      data,
    });

    return {
      mensage: 'Produto atualizado com sucesso!',
    };
  }

  // DELETE UMA PRODUTO PELO ID

  async remove(id_products: string) {
    await this.prisma.products.delete({
      where: { id_products },
    });

    return {
      message: 'Produto deletado com sucesso!',
    };
  }
}
