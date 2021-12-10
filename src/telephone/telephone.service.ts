import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTelephoneDto } from './dto/create-telephone.dto';
import { UpdateTelephoneDto } from './dto/update-telephone.dto';

@Injectable()
export class TelephoneService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR TELEFONE

  async create(CreateTelephoneDto: CreateTelephoneDto) {
    await this.prisma.telephone.create({
      data: {
        ...CreateTelephoneDto,
      },
    });

    return {
      mensage: 'Telefone cadastrado com sucesso!',
    };
  }

  // LISTO TODOS OS TELEFONES DESSA ROTA

  findAll() {
    return this.prisma.telephone.findMany();
  }

  // ENCONTRA UM TELEFONE POR ID

  findOne(id: string) {
    return this.prisma.telephone.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UM TELEFONE PELO ID

  async update(id: string, data: UpdateTelephoneDto) {
    await this.prisma.telephone.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Telefone atualizado com sucesso!',
    };
  }

  // DELETE UM TELEFONE PELO ID

  async remove(id: string) {
    await this.prisma.telephone.delete({
      where: { id },
    });

    return {
      message: 'Telefone deletado com sucesso!',
    };
  }
}
