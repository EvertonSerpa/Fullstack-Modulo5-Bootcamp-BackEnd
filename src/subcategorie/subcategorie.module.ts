import { Module } from '@nestjs/common';
import { SubcategorieService } from './subcategorie.service';
import { SubcategorieController } from './subcategorie.controller';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  controllers: [SubcategorieController],
  providers: [SubcategorieService, PrismaService]
})
export class SubcategorieModule {}
