import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { TelephoneModule } from './telephone/telephone.module';
import { SubcategorieModule } from './subcategorie/subcategorie.module';

@Module({
  imports: [UserModule, TelephoneModule, SubcategorieModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
