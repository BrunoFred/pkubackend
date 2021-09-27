import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ConsumeModule } from './consume/consume.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://brunofred:diamondisunbreakable@cluster0.flzw0.mongodb.net/pku'), UsersModule, ProductsModule, ConsumeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
