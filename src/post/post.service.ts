import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostsDto } from './dto/create-post.dto';
import { UpdatePostsDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  // CRIA UMA POSTAGEM

  async create(CreatePostsDto: CreatePostsDto) {
    await this.prisma.posts.create({
      data: {
        ...CreatePostsDto,
      },
    });

    return {
      mensage: 'Postegem cadastrada com sucesso!',
    };
  }

  // LISTO TODOS AS TABELAS DE POSTAGEM DESSA ROTA

  findAll() {
    return this.prisma.posts.findMany();
  }

  // ENCONTRO UMA TABELA PELO SEU ID

  findOne(id_message: string) {
    return this.prisma.posts.findUnique({
      where: {
        id_message,
      },
    });
  }

  // ATUALIZA UMA POSTAGEM PELO id_posts

  async update(id_message: string, data: UpdatePostsDto) {
    await this.prisma.posts.update({
      where: { id_message },
      data,
    });

    return {
      mensage: 'Postagem atualizada com sucesso!',
    };
  }

  // DELETE UMA POSTAGEM PELO id_posts

  async remove(id_message: string) {
    await this.prisma.posts.delete({
      where: { id_message },
    });

    return {
      message: 'Postagem deletada com sucesso!',
    };
  }
}
