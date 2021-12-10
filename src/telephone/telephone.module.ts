import { Module } from '@nestjs/common';
import { TelephoneService } from './telephone.service';
import { TelephoneController } from './telephone.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TelephoneController],
  providers: [TelephoneService, PrismaService]
})
export class TelephoneModule {}
