import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR PRODUTO

  async create(CreateProductDto: CreateProductDto) {
    await this.prisma.product.create({
      data: {
        ...CreateProductDto,
      },
    });

    return {
      mensage: 'Produto cadastrado com sucesso!',
    };
  }

  // LISTA TODDOS OS PRODUTOS DESSA ROTA

  findAll() {
    return this.prisma.product.findMany();
  }

  // ENCONTRA UM PRODUTO PEPLO ID

  findOne(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UM PRODUTO PELO ID

  async update(id: string, data: UpdateProductDto) {
    await this.prisma.product.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Produto atualizado com sucesso!',
    };
  }

  // DELETE UMA PRODUTO PELO ID

  async remove(id: string) {
    await this.prisma.product.delete({
      where: { id },
    });

    return {
      message: 'Produto deletado com sucesso!',
    };
  }
}
