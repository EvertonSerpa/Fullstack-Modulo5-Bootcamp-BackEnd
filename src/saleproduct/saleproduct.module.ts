import { Module } from '@nestjs/common';
import { SaleproductService } from './saleproduct.service';
import { SaleproductController } from './saleproduct.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SaleproductController],
  providers: [SaleproductService, PrismaService]
})
export class SaleproductModule {}
