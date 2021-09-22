import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://brunofred:diamondisunbreakable@cluster0.flzw0.mongodb.net/pku'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
