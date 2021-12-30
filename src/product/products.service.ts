import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  // CADASTRAR PRODUTO

  async create(createProductsDto: CreateProductsDto) {
    await this.prisma.products.create({
      data: {
        ...createProductsDto,
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

  findOne(id_product: string) {
    return this.prisma.products.findUnique({
      where: {
        id_product,
      },
    });
  }

  // ATUALIZA UM PRODUTO PELO ID

  async update(id_product: string, data: UpdateProductsDto) {
    await this.prisma.products.update({
      where: { id_product },
      data,
    });

    return {
      mensage: 'Produto atualizado com sucesso!',
    };
  }

  // DELETE UMA PRODUTO PELO ID

  async remove(id_product: string) {
    await this.prisma.products.delete({
      where: { id_product },
    });

    return {
      message: 'Produto deletado com sucesso!',
    };
  }
}
