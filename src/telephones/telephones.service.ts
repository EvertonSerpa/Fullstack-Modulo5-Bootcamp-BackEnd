import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTelephonesDto } from './dto/create-telephones.dto';
import { UpdateTelephonesDto } from './dto/update-telephones.dto';

@Injectable()
export class TelephonesService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR TELEFONE

  async create(CreateTelephonesDto: CreateTelephonesDto) {
    await this.prisma.telephones.create({
      data: {
        ...CreateTelephonesDto,
      },
    });

    return {
      mensage: 'Telefone cadastrado com sucesso!',
    };
  }

  // LISTO TODOS OS TELEFONES DESSA ROTA

  findAll() {
    return this.prisma.telephones.findMany();
  }

  // ENCONTRA UM TELEFONE POR ID

  findOne(id_telephones: string) {
    return this.prisma.telephones.findUnique({
      where: {
        id_telephones,
      },
    });
  }

  // ATUALIZA UM TELEFONE PELO ID

  async update(id_telephones: string, data: UpdateTelephonesDto) {
    await this.prisma.telephones.update({
      where: { id_telephones },
      data,
    });

    return {
      mensage: 'Telefone atualizado com sucesso!',
    };
  }

  // DELETE UM TELEFONE PELO ID

  async remove(id_telephones: string) {
    await this.prisma.telephones.delete({
      where: { id_telephones },
    });

    return {
      message: 'Telefone deletado com sucesso!',
    };
  }
}

