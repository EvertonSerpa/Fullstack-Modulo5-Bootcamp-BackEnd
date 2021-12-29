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

<<<<<<< HEAD
  findOne(id_world: string) {
=======
  findOne(id_worlds: string) {
>>>>>>> 0cf607df3674b9d8dc5a3dd0e9ef186a2cbeeefb
    return prisma.worlds.findUnique({
      where: {
        id_world,
      },
    });
  }

  // ATUALIZA UM MUNDO PELO ID

<<<<<<< HEAD
  async update(id_world: string, data: UpdateWorldsDto) {
    await prisma.worlds.update({
      where: { id_world },
=======
  async update(id_worlds: string, data: UpdateWorldsDto) {
    await prisma.worlds.update({
      where: { id_worlds },
>>>>>>> 0cf607df3674b9d8dc5a3dd0e9ef186a2cbeeefb
      data,
    });

    return {
      mensage: 'Mundo atualizado com sucesso!',
    };
  }

  // DELETE UM MUNDO PELO ID

<<<<<<< HEAD
  async remove(id_world: string) {
    await prisma.worlds.delete({
      where: { id_world },
=======
  async remove(id_worlds: string) {
    await prisma.worlds.delete({
      where: { id_worlds },
>>>>>>> 0cf607df3674b9d8dc5a3dd0e9ef186a2cbeeefb
    });

    return {
      message: 'Mundo deletado com sucesso!',
    };
  }
}
