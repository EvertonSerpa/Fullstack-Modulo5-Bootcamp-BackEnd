import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  // CADASTRAR CATEGORIA

  async create(createCategoriesDto: CreateCategoriesDto) {
    await this.prisma.categories.create({
      data: {
        ...createCategoriesDto,
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

  findOne(id_category: string) {
    return this.prisma.categories.findUnique({
      where: {
        id_category,
      },
    });
  }

  // ATUALIZA UMA CATEGORA PELO ID

  async update(id_category: string, data: UpdateCategoriesDto) {
    await this.prisma.categories.update({
      where: { id_category },
      data,
    });

    return {
      mensage: 'Ordem atualizada com sucesso!',
    };
  }

  // DELETE UMA CATEGORIA PELO ID

  async remove(id_category: string) {
    await this.prisma.categories.delete({
      where: { id_category },
    });

    return {
      message: 'Categoria deletada com sucesso!',
    };
  }
}
