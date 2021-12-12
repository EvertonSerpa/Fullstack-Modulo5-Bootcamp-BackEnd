import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UMA POSTAGEM

  async create(CreatePostDto: CreatePostDto) {
    await this.prisma.post.create({
      data: {
        ...CreatePostDto,
      },
    });

    return {
      mensage: 'Postegem cadastrada com sucesso!',
    };
  }

  // LISTO TODOS AS TABELAS DE POSTAGEM DESSA ROTA

  findAll() {
    return this.prisma.post.findMany();
  }

  // ENCONTRO UMA TABELA PELO SEU ID

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UMA POSTAGEM PELO ID

  async update(id: string, data: UpdatePostDto) {
    await this.prisma.post.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Postagem atualizada com sucesso!',
    };
  }

  // DELETE UMA POSTAGEM PELO ID

  async remove(id: string) {
    await this.prisma.post.delete({
      where: { id },
    });

    return {
      message: 'Postagem deletada com sucesso!',
    };
  }
}
