import { Module } from '@nestjs/common';
import { SalesProductsService } from './sales-products.service';
import { SaleproductController } from './sales-products.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SaleproductController],
  providers: [SalesProductsService, PrismaService],
})
export class SalesProductsModule {}
