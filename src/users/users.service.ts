import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UM USUÁRIO

  async create(CreateUsersDto: CreateUsersDto) {
    await this.prisma.users.create({
      data: {
        ...CreateUsersDto,
      },
    });

    return {
      mensage: 'Usuário cadastrado com sucesso!',
    };
  }

  // LISTO TODOS OS USUÁRIOS DESSA ROTA

  findAll() {
    return this.prisma.users.findMany();
  }

  // ENCONTRO UM USUÁRIO POR ID

  findOne(id_users: string) {
    return this.prisma.users.findUnique({
      where: {
        id_users ,
      },
    });
  }

  // ATUALIZA UM USUÁRIO PELO ID

  async update( id_users : string, data: UpdateUsersDto) {
    await this.prisma.users.update({
      where: { id_users },
      data,
    });

    return {
      mensage: 'Usuário atualizado com sucesso!',
    };
  }

  // DELETE UM USUÁRIO PELO ID

  async remove( id_users : string) {
    await this.prisma.users.delete({
      where: { id_users},
    });

    return {
      message: 'Usuário deletado com sucesso!',
    };
  }
}
