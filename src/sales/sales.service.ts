import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSalesDto } from './dto/create-sales.dto';
import { UpdateSalesDto } from './dto/update-sales.dto';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}

  // CADASTRAR TABELA DE VENDA

  async create(createSalesDto: CreateSalesDto) {
    await this.prisma.sales.create({
      data: {
        ...createSalesDto,
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

  findOne(id_sale: string) {
    return this.prisma.sales.findUnique({
      where: {
        id_sale,
      },
    });
  }

  // ATUALIZA UMA TABELA DE VENDA PELO ID

  async update(id_sale: string, data: UpdateSalesDto) {
    await this.prisma.sales.update({
      where: { id_sale },
      data,
    });

    return {
      mensage: 'Venda atualizada com sucesso!',
    };
  }

  // DELETE UMA TABELA DE VENDA PELO ID

  async remove(id_sale: string) {
    await this.prisma.sales.delete({
      where: { id_sale },
    });

    return {
      message: 'Venda deletada com sucesso!',
    };
  }
}
