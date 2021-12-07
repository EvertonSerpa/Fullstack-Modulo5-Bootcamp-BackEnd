import { Injectable } from '@nestjs/common';
import { Prisma, Subcategories } from '@prisma/client'
import { PrismaService } from 'src/prisma.service';
import { SubcategoriesRole } from './enum/role.enum'


@Injectable()
export class SubcategoriesService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.SubcategoriesCreateInput, role: SubcategoriesRole): Promise<Subcategories> {
    
    const subcategories = await this.db.subcategories.create({
      data,
    });

    return subcategories;
  }
}
