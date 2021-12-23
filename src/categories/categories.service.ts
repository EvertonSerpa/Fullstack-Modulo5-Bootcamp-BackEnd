import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  // CADASTRAR CATEGORIA

  async create(CreateCategoriesDto: CreateCategoriesDto) {
    await this.prisma.categories.create({
      data: {
        ...CreateCategoriesDto,
      },
    });

    return {
      mensage: 'Categoria cadastrada com sucesso!',
    };
  }

  // LISTA TODAS AS CATEGORIAS DESSA ROTA

  findAll() {
    return this.prisma.categories.findMany();
  }

  // ENCONTRA UMA CATEGORIA PEPLO ID

  findOne(id_categories: string) {
    return this.prisma.categories.findUnique({
      where: {
        id_categories,
      },
    });
  }

  // ATUALIZA UMA CATEGORA PELO ID

  async update(id_categories: string, data: UpdateCategoriesDto) {
    await this.prisma.categories.update({
      where: { id_categories },
      data,
    });

    return {
      mensage: 'Ordem atualizada com sucesso!',
    };
  }

  // DELETE UMA CATEGORIA PELO ID

  async remove(id_categories: string) {
    await this.prisma.categories.delete({
      where: { id_categories },
    });

    return {
      message: 'Categoria deletada com sucesso!',
    };
  }
}
