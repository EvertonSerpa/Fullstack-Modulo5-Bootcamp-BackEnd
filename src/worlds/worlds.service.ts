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

  findOne(id_worlds: string) {
    return prisma.worlds.findUnique({
      where: {
        id_worlds,
      },
    });
  }

  // ATUALIZA UM MUNDO PELO ID

  async update(id_worlds: string, data: UpdateWorldsDto) {
    await prisma.worlds.update({
      where: { id_worlds },
      data,
    });

    return {
      mensage: 'Mundo atualizado com sucesso!',
    };
  }

  // DELETE UM MUNDO PELO ID

  async remove(id_worlds: string) {
    await prisma.worlds.delete({
      where: { id_worlds },
    });

    return {
      message: 'Mundo deletado com sucesso!',
    };
  }
}
