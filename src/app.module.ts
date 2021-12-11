import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { TelephoneModule } from './telephone/telephone.module';
import { SubcategorieModule } from './subcategorie/subcategorie.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CategorieModule } from './categorie/categorie.module';


@Module({
  imports: [UserModule, TelephoneModule, SubcategorieModule, ProductModule, OrderModule, CategorieModule,],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
