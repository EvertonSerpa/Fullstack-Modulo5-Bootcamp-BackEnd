import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TelephonesModule } from './telephones/telephones.module';
import { AdressesModule } from './adresses/adresses.module';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import { ProductsNoSpecService } from './products--no-spec/products--no-spec.service';
import { SellersModule } from './sellers/sellers.module';


@Module({
  imports: [UsersModule, TelephonesModule, AdressesModule, CategoriesModule, SubcategoriesModule, ProductsModule, SellersModule],
  controllers: [],
  providers: [ProductsNoSpecService],
})
export class AppModule {}
