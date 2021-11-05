import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ConsumeModule } from './consume/consume.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://brunofred:diamondisunbreakable@cluster0.flzw0.mongodb.net/pku'), 
    UsersModule, 
    ProductsModule, 
    ConsumeModule,
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
