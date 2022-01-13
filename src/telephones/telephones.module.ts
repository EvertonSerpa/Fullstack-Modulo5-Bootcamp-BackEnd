import { Module } from '@nestjs/common';
import { TelephonesService } from './telephones.service';
import { TelephonesController } from './telephones.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TelephonesController],
  providers: [TelephonesService, PrismaService],
})
export class TelephonesModule {}
