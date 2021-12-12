import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { TelephoneModule } from './telephone/telephone.module';
import { SubcategorieModule } from './subcategorie/subcategorie.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CategorieModule } from './categorie/categorie.module';
import { QualificationModule } from './qualification/qualification.module';
import { SaleModule } from './sale/sale.module';
import { SaleproductModule } from './saleproduct/saleproduct.module';
import { DisputeModule } from './dispute/dispute.module';
import { PostModule } from './post/post.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { TransactionModule } from './transaction/transaction.module';
import { WalletModule } from './wallet/wallet.module';
import { WorldsModule } from './world/world.module';

@Module({
  imports: [
    UserModule,
    TelephoneModule,
    SubcategorieModule,
    ProductModule,
    OrderModule,
    CategorieModule,
    QualificationModule,
    SaleModule,
    SaleproductModule,
    SaleproductModule,
    DisputeModule,
    PostModule,
    PaymentMethodModule,
    TransactionModule,
    WalletModule,
    WorldsModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
