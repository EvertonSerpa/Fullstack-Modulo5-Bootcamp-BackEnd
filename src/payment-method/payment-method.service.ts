import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@Injectable()
export class PaymentMethodService {
  constructor(private readonly prisma: PrismaService) {}

  // CRIA UM METODO DE PAGAMENTO

  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    await this.prisma.payment_method.create({
      data: {
        ...createPaymentMethodDto,
      },
    });

    return {
      mensage: 'Metodo de pagamento cadastrado com sucesso!',
    };
  }

  // LISTA TODOS AS TABELAS DE METODO DE PAGAMENTO DESSA ROTA

  findAll() {
    return this.prisma.payment_method.findMany();
  }

  // ENCONTRA UM METODO DE PAGAMENTO POR ID

  findOne(id_method: string) {
    return this.prisma.payment_method.findUnique({
      where: {
        id_method,
      },
    });
  }

  // ATUALIZA UM METODO DE PAGAMENTO PELO ID

  async update(id_method: string, data: UpdatePaymentMethodDto) {
    await this.prisma.payment_method.update({
      where: { id_method },
      data,
    });

    return {
      mensage: 'Metodo de pagamento atualizado com sucesso!',
    };
  }

  // DELETE UM METODO DE PAGAMENTO PELO ID

  async remove(id_method: string) {
    await this.prisma.payment_method.delete({
      where: { id_method },
    });

    return {
      message: 'Metodo de pagamento deletado com sucesso!',
    };
  }
}
