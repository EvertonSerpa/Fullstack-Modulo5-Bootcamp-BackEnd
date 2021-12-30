import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { Prisma, users } from '@prisma/client';
import { UserRole } from './enum/role.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  // LÓGICA DA CRIAÇÃO  DO USUÁRIO

  async create(createUsersDto: CreateUsersDto, role: UserRole): Promise<users> {
    const userExists = await this.db.users.findFirst({
      where: { email: createUsersDto.email },
    });

    // CASO O EMAIL JÁ ESTEJA CADASTRADO, EXIBIRÁ A SEGUINTE MENSAGEM

    if (userExists) {
      throw new ConflictException('Email já está cadastrado');
    }

    // CRIPTOGRAFAMOS A SENHA DO USUARIO
    const hashedPassword = await bcrypt.hash(createUsersDto.password, 10);

    // CASO O NIKENAME JÁ ESTEJA CADASTRADO, EXIBIRÁ A SEGUINTE MENSAGEM

    const nikeNemeExists = await this.db.users.findUnique({
      where: { nick_name: createUsersDto.nick_name },
    });

    if (nikeNemeExists) {
      throw new ConflictException('Nike name já está cadastrado');
    }

    // CRIAÇÃO DO USUARIO

    const users = await this.db.users.create({
      data: {
        ...(createUsersDto as unknown as Prisma.usersUncheckedCreateInput),
        role: role,
        password: hashedPassword,
      },
    });

    // A SENHA DO USUARIO É DELETADA ANTES DO RETORNO,  CRIPTOGRAFADA E GUARDADA NO BANCO DE DADOS

    delete users.password;
    return users;
  }

  // LISTO TODOS OS USUÁRIOS DESSA ROTA

  async findAll() {
    const users = await this.db.users.findMany();

    // VARRO TODO O USERS, RETIRO O PASSWORD E RETORNO O RESTO DOS DADOS A SEREM LISTADOS
    const newUsers = users.map(({ password, ...rest }) => rest);
    return newUsers;
  }

  // ENCONTRO UM USUÁRIO POR ID

  async findOne(id_user: string) {
    const users = await this.db.users.findUnique({
      where: {
        id_user,
      },
    });

    delete users.password;
    return users;
  }

  // ATUALIZA UM USUÁRIO PELO ID

  async update(id_user: string, data: UpdateUsersDto) {
    await this.db.users.update({
      where: { id_user },
      data,
    });

    return {
      mensage: 'Usuário atualizado com sucesso!',
    };
  }

  // DELETE UM USUÁRIO PELO ID

  async remove(id_user: string) {
    await this.db.users.delete({
      where: { id_user },
    });

    return {
      message: 'Usuário deletado com sucesso!',
    };
  }
}
