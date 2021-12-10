import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UM USUÁRIO

  async create(CreateUserDto: CreateUserDto) {
    await this.prisma.user.create({
      data: {
        ...CreateUserDto,
      },
    });

    return {
      mensage: 'Usuário cadastrado com sucesso!',
    };
  }

  // LISTO TODOS OS USUÁRIOS DESSA ROTA

  findAll() {
    return this.prisma.user.findMany();
  }

  // ENCONTRO UM USUÁRIO POR ID

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UM USUÁRIO PELO ID

  async update(id: string, data: UpdateUserDto) {
    await this.prisma.user.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Usuário atualizado com sucesso!',
    };
  }

  // DELETE UM USUÁRIO PELO ID

  async remove(id: string) {
    await this.prisma.user.delete({
      where: { id },
    });

    return {
      message: 'Usuário deletado com sucesso!',
    };
  }
}
