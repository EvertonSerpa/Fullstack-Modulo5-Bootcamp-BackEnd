import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSalesDto } from './dto/create-sales.dto';
import { UpdateSalesDto } from './dto/update-sales.dto';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR TABELA DE VENDA

  async create(CreateSalesDto: CreateSalesDto) {
    await this.prisma.sales.create({
      data: {
        ...CreateSalesDto,
      },
    });

    return {
      mensage: 'Venda cadastrada com sucesso!',
    };
  }

  // LISTA TODAS AS TABELAS DE VENDAS DESSA ROTA

  findAll() {
    return this.prisma.sales.findMany();
  }

  // ENCONTRA UMA TABELA DE VENDA PELO ID

  findOne(id_sales: string) {
    return this.prisma.sales.findUnique({
      where: {
        id_sales,
      },
    });
  }

  // ATUALIZA UMA TABELA DE VENDA PELO ID

  async update(id_sales: string, data: UpdateSalesDto) {
    await this.prisma.sales.update({
      where: { id_sales },
      data,
    });

    return {
      mensage: 'Venda atualizada com sucesso!',
    };
  }

  // DELETE UMA TABELA DE VENDA PELO ID

  async remove(id_sales: string) {
    await this.prisma.sales.delete({
      where: { id_sales },
    });

    return {
      message: 'Venda deletada com sucesso!',
    };
  }
}
