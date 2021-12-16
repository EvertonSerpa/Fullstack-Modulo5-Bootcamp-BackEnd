import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorldsDto } from './dto/create-worlds.dto';
import { UpdateWorldsDto } from './dto/update-worlds.dto';

@Injectable()
export class WorldsService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UM MUNDO

  async create(CreateWorldsDto: CreateWorldsDto) {
    await this.prisma.worlds.create({
      data: {
        ...CreateWorldsDto,
      },
    });

    return {
      mensage: 'Mundo cadastrado com sucesso!',
    };
  }

  // LISTO TODOS OS MUNDOS DESSA ROTA

  findAll() {
    return this.prisma.worlds.findMany();
  }

  // ENCONTRO UM MUNDO POR ID

  findOne(id_worlds: string) {
    return this.prisma.worlds.findUnique({
      where: {
        id_worlds,
      },
    });
  }

  // ATUALIZA UM MUNDO PELO ID

  async update(id_worlds: string, data: UpdateWorldsDto) {
    await this.prisma.worlds.update({
      where: { id_worlds },
      data,
    });

    return {
      mensage: 'Mundo atualizado com sucesso!',
    };
  }

  // DELETE UM MUNDO PELO ID

  async remove(id_worlds: string) {
    await this.prisma.worlds.delete({
      where: { id_worlds },
    });

    return {
      message: 'Mundo deletado com sucesso!',
    };
  }
}
