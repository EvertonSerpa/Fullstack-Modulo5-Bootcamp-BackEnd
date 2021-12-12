import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorldDto } from './dto/create-world.dto';
import { UpdateWorldDto } from './dto/update-world.dto';

@Injectable()
export class WorldService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UM MUNDO

  async create(CreateWorldDto: CreateWorldDto) {
    await this.prisma.world.create({
      data: {
        ...CreateWorldDto,
      },
    });

    return {
      mensage: 'Mundo cadastrado com sucesso!',
    };
  }

  // LISTO TODOS OS MUNDOS DESSA ROTA

  findAll() {
    return this.prisma.world.findMany();
  }

  // ENCONTRO UM MUNDO POR ID

  findOne(id: string) {
    return this.prisma.world.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UM MUNDO PELO ID

  async update(id: string, data: UpdateWorldDto) {
    await this.prisma.world.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Mundo atualizado com sucesso!',
    };
  }

  // DELETE UM MUNDO PELO ID

  async remove(id: string) {
    await this.prisma.world.delete({
      where: { id },
    });

    return {
      message: 'Mundo deletado com sucesso!',
    };
  }
}
