import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubcategoriesDto } from './dto/create-subcategories.dto';
import { UpdateSubcategoriesDto } from './dto/update-subcategories.dto';

@Injectable()
export class SubcategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  // CADASTRAR SUBCATEGORIA

  async create(createSubcategorieDto: CreateSubcategoriesDto) {
    await this.prisma.subcategories.create({
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
    return this.prisma.subcategories.findMany();
  }

  // ENCONTRA UM SUBCATEGORIA POR ID

  findOne(id_subcategory: string) {
    return this.prisma.subcategories.findUnique({
      where: {
        id_subcategory,
      },
    });
  }

  // ATUALIZA UM SUBCATEGORIA PELO ID

  async update(id_subcategory: string, data: UpdateSubcategoriesDto) {
    await this.prisma.subcategories.update({
      where: { id_subcategory },
      data,
    });

    return {
      mensage: 'Subcategoria atualizada com sucesso!',
    };
  }

  // DELETE UMA SUBCATEGORIA PELO ID

  async remove(id_subcategory: string) {
    await this.prisma.subcategories.delete({
      where: { id_subcategory },
    });

    return {
      message: 'Subcategoria deletada com sucesso!',
    };
  }
}
