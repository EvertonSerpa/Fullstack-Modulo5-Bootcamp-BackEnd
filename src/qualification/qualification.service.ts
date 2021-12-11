import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQualificationDto } from './dto/create-qualification.dto';
import { UpdateQualificationDto } from './dto/update-qualification.dto';

@Injectable()
export class QualificationService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CADASTRAR QUALIFICAÇÃO

  async create(CreateQualificationDto: CreateQualificationDto) {
    await this.prisma.qualification.create({
      data: {
        ...CreateQualificationDto,
      },
    });

    return {
      mensage: 'Qualificação cadastrada com sucesso!',
    };
  }

  // LISTA TODAS AS QUALIFICAÇÕES DESSA ROTA

  findAll() {
    return this.prisma.qualification.findMany();
  }

  // ENCONTRA UMA QUALIFICACÃO PEPLO ID

  findOne(id: string) {
    return this.prisma.qualification.findUnique({
      where: {
        id,
      },
    });
  }

  // ATUALIZA UMA QAULIFICAÇÃO PELO ID

  async update(id: string, data: UpdateQualificationDto) {
    await this.prisma.qualification.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Qualificação atualizada com sucesso!',
    };
  }

  // DELETE UMA QUALIFICAÇÃO PELO ID

  async remove(id: string) {
    await this.prisma.qualification.delete({
      where: { id },
    });

    return {
      message: 'Qualificação deletada com sucesso!',
    };
  }
}

