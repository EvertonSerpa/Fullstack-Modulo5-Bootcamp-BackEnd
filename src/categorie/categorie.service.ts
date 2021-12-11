import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';

@Injectable()
export class CategorieService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR CATEGORIA

  async create(CreateCategorieDto: CreateCategorieDto) {
    await this.prisma.categorie.create({
      data: {
        ...CreateCategorieDto,
      },
    });

    return {
      mensage: 'Categoria cadastrada com sucesso!',
    };
  }

  // LISTA TODAS AS CATEGORIAS DESSA ROTA

  findAll() {
    return this.prisma.categorie.findMany();
  }

  // ENCONTRA UMA CATEGORIA PEPLO ID

  findOne(id: string) {
    return this.prisma.categorie.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UMA CATEGORA PELO ID

  async update(id: string, data: UpdateCategorieDto) {
    await this.prisma.categorie.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Ordem atualizada com sucesso!',
    };
  }

  // DELETE UMA CATEGORIA PELO ID

  async remove(id: string) {
    await this.prisma.categorie.delete({
      where: { id },
    });

    return {
      message: 'Categoria deletada com sucesso!',
    };
  }
}

