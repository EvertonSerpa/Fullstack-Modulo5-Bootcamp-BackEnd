import { Injectable } from '@nestjs/common';
import { Prisma, Telephone } from '@prisma/client'
import { PrismaService } from 'src/prisma.service';
import { TelephoneRole } from './enum/role.enum'

@Injectable()
export class TelephonesService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.TelephoneCreateInput, role: TelephoneRole): Promise<Telephone> {
    
    const telephone = await this.db.telephone.create({
      data,
    });

    return telephone;
  }
}