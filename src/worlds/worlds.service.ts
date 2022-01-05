import { Injectable } from '@nestjs/common';
import { CreateWorldsDto } from './dto/create-worlds.dto';
import { UpdateWorldsDto } from './dto/update-worlds.dto';
import { prisma } from '../config/db';

@Injectable()
export class WorldsService {

  // CRIA UM MUNDO

  async create(createWorldsDto: CreateWorldsDto) {
    await prisma.worlds.create({
      data: {
        ...createWorldsDto,
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

  // ENCONTRO UM MUNDO PELO ID

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