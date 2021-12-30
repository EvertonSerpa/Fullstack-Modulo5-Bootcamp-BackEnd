import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSalesProductsDto } from './dto/create-sales-products.dto';
import { UpdateSalesProductsDto } from './dto/update-sales-products.dto';

@Injectable()
export class SalesProductsService {
  constructor(private readonly prisma: PrismaService) {}

  // CRIA UM USUÁRIO

  async create(CreateSalesProductsDto: CreateSalesProductsDto) {
    await this.prisma.sales_products.create({
      data: {
        ...CreateSalesProductsDto,
      },
    });

    return {
      mensage: 'Usuário cadastrado com sucesso!',
    };
  }

  // LISTO TODOS OS USUÁRIOS DESSA ROTA

  findAll() {
    return this.prisma.sales_products.findMany();
  }

  // ENCONTRO UM USUÁRIO POR ID

  findOne(id_itens: string) {
    return this.prisma.sales_products.findUnique({
      where: {
        id_itens,
      },
    });
  }

  // ATUALIZA UM USUÁRIO PELO ID

  async update(id_itens: string, data: UpdateSalesProductsDto) {
    await this.prisma.sales_products.update({
      where: { id_itens },
      data,
    });

    return {
      mensage: 'Usuário atualizado com sucesso!',
    };
  }

  // DELETE UM USUÁRIO PELO ID

  async remove(id_itens: string) {
    await this.prisma.sales_products.delete({
      where: { id_itens },
    });

    return {
      message: 'Usuário deletado com sucesso!',
    };
  }
}
