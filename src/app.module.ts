import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { TelephoneModule } from './telephone/telephone.module';

@Module({
  imports: [UserModule, TelephoneModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
