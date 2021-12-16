import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubcategoriesDto } from './dto/create-subcategories.dto';
import { UpdateSubcategoriesDto } from './dto/update-subcategories.dto';

@Injectable()
export class SubcategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR SUBCATEGORIA

  async create(CreateSubcategorieDto: CreateSubcategoriesDto) {
    await this.prisma.subcategories.create({
      data: {
        ...CreateSubcategorieDto,
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

  findOne( id_subcategories: string) {
    return this.prisma.subcategories.findUnique({
      where: {
        id_subcategories,
      },
    });
  }

  // ATUALIZA UM SUBCATEGORIA PELO ID

  async update( id_subcategories: string, data: UpdateSubcategoriesDto) {
    await this.prisma.subcategories.update({
      where: {  id_subcategories },
      data,
    });

    return {
      mensage: 'Subcategoria atualizada com sucesso!',
    };
  }

  // DELETE UMA SUBCATEGORIA PELO ID

  async remove( id_subcategories: string) {
    await this.prisma.subcategories.delete({
      where: { id_subcategories },
    });

    return {
      message: 'Subcategoria deletada com sucesso!',
    };
  }
}
