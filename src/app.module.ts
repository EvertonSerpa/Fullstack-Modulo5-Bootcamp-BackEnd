import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TelephonesModule } from './telephones/telephones.module';


@Module({
  imports: [UsersModule, TelephonesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
