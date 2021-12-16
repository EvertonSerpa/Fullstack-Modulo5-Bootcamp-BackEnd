import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { TelephonesModule } from './telephones/telephones.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './product/product.module';
import { OrdersModule } from './order/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { QualificationModule } from './qualification/qualification.module';
import { SalesModule } from './sales/sales.module';
import { SalesProductsModule } from './sales-products/sales-products.module';
import { DisputesModule } from './disputes/disputes.module';
import { PostsModule } from './post/post.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { TransactionsModule } from './transactions/transactions.module';
import { WalletsModule } from './wallets/wallets.module';
import { WorldsModule } from './worlds/worlds.module';
import { DepositMoneyModule } from './deposit-money/deposit-money.module';

@Module({
  imports: [
    UsersModule,
    TelephonesModule,
    SubcategoriesModule,
    ProductsModule,
    OrdersModule,
    CategoriesModule,
    QualificationModule,
    SalesModule,
    SalesProductsModule,
    DisputesModule,
    PostsModule,
    PaymentMethodModule,
    TransactionsModule,
    WalletsModule,
    WorldsModule,
    DepositMoneyModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
