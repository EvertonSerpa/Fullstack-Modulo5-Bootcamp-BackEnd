import { Module } from '@nestjs/common';
import { SubcategoriesController } from './subcategories.controller';
import { SubcategoriesService } from './subcategories.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SubcategoriesController],
  providers: [SubcategoriesService, PrismaService ]
})
export class SubcategoriesModule {}
