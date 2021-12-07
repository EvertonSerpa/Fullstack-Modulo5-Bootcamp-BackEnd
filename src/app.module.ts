import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TelephonesModule } from './telephones/telephones.module';
import { AdressesModule } from './adresses/adresses.module';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import { SellersModule } from './sellers/sellers.module';
import { PurchasesModule } from './purchases/purchases.module';
import { OrdersModule } from './orders/orders.module';
import { ClaimsModule } from './claims/claims.module';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [UsersModule, TelephonesModule, AdressesModule, CategoriesModule, SubcategoriesModule, ProductsModule, SellersModule, PurchasesModule, OrdersModule, ClaimsModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
