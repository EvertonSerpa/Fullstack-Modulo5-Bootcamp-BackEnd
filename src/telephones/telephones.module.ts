import { Module } from '@nestjs/common';
import { TelephonesController } from './telephones.controller';
import { TelephonesService } from './telephones.service';
import { PrismaService } from 'src/prisma.service';



@Module({
  controllers: [TelephonesController],
  providers: [TelephonesService, PrismaService]
})
export class TelephonesModule {}
