import { Module } from '@nestjs/common';
import { DepositMoneyService } from './deposit-money.service';
import { DepositMoneyController } from './deposit-money.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DepositMoneyController],
  providers: [DepositMoneyService, PrismaService],
})
export class DepositMoneyModule {}
