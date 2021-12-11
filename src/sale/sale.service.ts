import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR TABELA DE VENDA

  async create(CreateSaleDto: CreateSaleDto) {
    await this.prisma.sale.create({
      data: {
        ...CreateSaleDto,
      },
    });

    return {
      mensage: 'Venda cadastrada com sucesso!',
    };
  }

  // LISTA TODAS AS TABELAS DE VENDAS DESSA ROTA

  findAll() {
    return this.prisma.sale.findMany();
  }

  // ENCONTRA UMA TABELA DE VENDA PELO ID

  findOne(id: string) {
    return this.prisma.sale.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UMA TABELA DE VENDA PELO ID

  async update(id: string, data: UpdateSaleDto) {
    await this.prisma.sale.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Venda atualizada com sucesso!',
    };
  }

  // DELETE UMA TABELA DE VENDA PELO ID

  async remove(id: string) {
    await this.prisma.sale.delete({
      where: { id },
    });

    return {
      message: 'Venda deletada com sucesso!',
    };
  }
}
