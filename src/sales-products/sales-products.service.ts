import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSalesProductsDto } from './dto/create-sales-products.dto';
import { UpdateSalesProductsDto } from './dto/update-sales-products.dto';

@Injectable()
export class SalesProductsService {
  constructor(private readonly prisma: PrismaService) {}

  // CRIA UM USUÁRIO

  async create(CreateSalesProductsDto: CreateSalesProductsDto) {
    await this.prisma.sales_Products.create({
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
    return this.prisma.sales_Products.findMany();
  }

  // ENCONTRO UM USUÁRIO POR ID

  findOne(id_sales_procucts: string) {
    return this.prisma.sales_Products.findUnique({
      where: {
        id_sales_procucts,
      },
    });
  }

  // ATUALIZA UM USUÁRIO PELO ID

  async update(id_sales_procucts: string, data: UpdateSalesProductsDto) {
    await this.prisma.sales_Products.update({
      where: { id_sales_procucts },
      data,
    });

    return {
      mensage: 'Usuário atualizado com sucesso!',
    };
  }

  // DELETE UM USUÁRIO PELO ID

  async remove(id_sales_procucts: string) {
    await this.prisma.sales_Products.delete({
      where: { id_sales_procucts },
    });

    return {
      message: 'Usuário deletado com sucesso!',
    };
  }
}
