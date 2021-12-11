import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSaleproductDto } from './dto/create-saleproduct.dto';
import { UpdateSaleproductDto } from './dto/update-saleproduct.dto';

@Injectable()
export class SaleproductService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UM USUÁRIO

  async create(CreateSaleproductDto: CreateSaleproductDto) {
    await this.prisma.sale_Product.create({
      data: {
        ...CreateSaleproductDto,
      },
    });

    return {
      mensage: 'Usuário cadastrado com sucesso!',
    };
  }

  // LISTO TODOS OS USUÁRIOS DESSA ROTA

  findAll() {
    return this.prisma.sale_Product.findMany();
  }

  // ENCONTRO UM USUÁRIO POR ID

  findOne(id: string) {
    return this.prisma.sale_Product.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UM USUÁRIO PELO ID

  async update(id: string, data: UpdateSaleproductDto) {
    await this.prisma.sale_Product.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Usuário atualizado com sucesso!',
    };
  }

  // DELETE UM USUÁRIO PELO ID

  async remove(id: string) {
    await this.prisma.sale_Product.delete({
      where: { id },
    });

    return {
      message: 'Usuário deletado com sucesso!',
    };
  }
}

