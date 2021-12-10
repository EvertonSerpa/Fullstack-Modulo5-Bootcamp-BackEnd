import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubcategorieDto } from './dto/create-subcategorie.dto';
import { UpdateSubcategorieDto } from './dto/update-subcategorie.dto';

@Injectable()
export class SubcategorieService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR SUBCATEGORIA

  async create(CreateSubcategorieDto: CreateSubcategorieDto) {
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

  // ENCONTRA UM TELEFONE POR ID

  findOne(id: string) {
    return this.prisma.subcategories.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UM SUBCATEGORIA PELO ID

  async update(id: string, data: UpdateSubcategorieDto) {
    await this.prisma.subcategories.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Subcategoria atualizada com sucesso!',
    };
  }

  // DELETE UMA SUBCATEGORIA PELO ID

  async remove(id: string) {
    await this.prisma.subcategories.delete({
      where: { id },
    });

    return {
      message: 'Subcategoria deletada com sucesso!',
    };
  }
}
