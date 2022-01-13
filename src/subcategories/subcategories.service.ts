import { Injectable } from '@nestjs/common';
import { prisma } from '../config/db';
import { CreateSubcategoriesDto } from './dto/create-subcategories.dto';
import { UpdateSubcategoriesDto } from './dto/update-subcategories.dto';

@Injectable()
export class SubcategoriesService {

  // CADASTRAR SUBCATEGORIA

  async create(createSubcategorieDto: CreateSubcategoriesDto) {
    await prisma.subcategories.create({
      data: {
        ...createSubcategorieDto,
      },
    });

    return {
      mensage: 'Subcategoria cadastrada com sucesso!',
    };
  }

  // LISTA TODAS AS SUBCATEGORIAS DESSA ROTA

  findAll() {
    return prisma.subcategories.findMany();
  }

  // ENCONTRA UM SUBCATEGORIA POR ID

  findOne(id_subcategory: string) {
    return prisma.subcategories.findUnique({
      where: {
        id_subcategory,
      },
    });
  }

  // ATUALIZA UM SUBCATEGORIA PELO ID

  async update(id_subcategory: string, data: UpdateSubcategoriesDto) {
    await prisma.subcategories.update({
      where: { id_subcategory },
      data,
    });

    return {
      mensage: 'Subcategoria atualizada com sucesso!',
    };
  }

  // DELETE UMA SUBCATEGORIA PELO ID

  async remove(id_subcategory: string) {
    await prisma.subcategories.delete({
      where: { id_subcategory },
    });

    return {
      message: 'Subcategoria deletada com sucesso!',
    };
  }
}
