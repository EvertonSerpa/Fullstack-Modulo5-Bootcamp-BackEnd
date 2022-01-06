import { Injectable } from '@nestjs/common';
import { prisma } from '../config/db';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';

@Injectable()
export class CategoriesService {

  // CADASTRAR CATEGORIA

  async create(createCategoriesDto: CreateCategoriesDto) {
    await prisma.categories.create({
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
    return prisma.categories.findMany();
  }

  // ENCONTRA UMA CATEGORIA PEPLO ID

  findOne(id_category: string) {
    return prisma.categories.findUnique({
      where: {
        id_category,
      },
    });
  }

  // ATUALIZA UMA CATEGORA PELO ID

  async update(id_category: string, data: UpdateCategoriesDto) {
    await prisma.categories.update({
      where: { id_category },
      data,
    });

    return {
      mensage: 'Categoria atualizada com sucesso!',
    };
  }

  // DELETE UMA CATEGORIA PELO ID

  async remove(id_category: string) {
    await prisma.categories.delete({
      where: { id_category },
    });

    return {
      message: 'Categoria deletada com sucesso!',
    };
  }
}
