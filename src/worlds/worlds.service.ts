import { Injectable } from '@nestjs/common';
//import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorldsDto } from './dto/create-worlds.dto';
import { UpdateWorldsDto } from './dto/update-worlds.dto';
import { prisma } from '../config/db';

@Injectable()
export class WorldsService {
  //  constructor(private readonly prisma: prisma) {}

  // CRIA UM MUNDO

  async create(CreateWorldsDto: CreateWorldsDto) {
    await prisma.worlds.create({
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
    return prisma.worlds.findMany();
  }

  // ENCONTRO UM MUNDO POR ID

  findOne(id_world: string) {
    return prisma.worlds.findUnique({
      where: {
        id_world,
      },
    });
  }

  // ATUALIZA UM MUNDO PELO ID

  async update(id_world: string, data: UpdateWorldsDto) {
    await prisma.worlds.update({
      where: { id_world },
      data,
    });

    return {
      mensage: 'Mundo atualizado com sucesso!',
    };
  }

  // DELETE UM MUNDO PELO ID

  async remove(id_world: string) {
    await prisma.worlds.delete({
      where: { id_world },
    });

    return {
      message: 'Mundo deletado com sucesso!',
    };
  }
}
