import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@Injectable()
export class PaymentMethodService {
  constructor(private readonly prisma: PrismaService) {}
  
  // CRIA UM METODO DE PAGAMENTO

  async create(CreatePaymentMethodDto: CreatePaymentMethodDto) {
    await this.prisma.payment_Method.create({
      data: {
        ...CreatePaymentMethodDto,
      },
    });

    return {
      mensage: 'Metodo de pagamento cadastrado com sucesso!',
    };
  }

  // LISTA TODOS AS TABELAS DE METODO DE PAGAMENTO DESSA ROTA

  findAll() {
    return this.prisma.payment_Method.findMany();
  }

  // ENCONTRA UM METODO DE PAGAMENTO POR ID

  findOne(id_payment_method : string) {
    return this.prisma.payment_Method.findUnique({
      where: {
        id_payment_method ,
      },
    });
  }

  // ATUALIZA UM METODO DE PAGAMENTO PELO ID

  async update(id_payment_method : string, data: UpdatePaymentMethodDto) {
    await this.prisma.payment_Method.update({
      where: { id_payment_method  },
      data,
    });

    return {
      mensage: 'Metodo de pagamento atualizado com sucesso!',
    };
  }

  // DELETE UM METODO DE PAGAMENTO PELO ID

  async remove(id_payment_method : string) {
    await this.prisma.payment_Method.delete({
      where: { id_payment_method  },
    });

    return {
      message: 'Metodo de pagamento deletado com sucesso!',
    };
  }
}