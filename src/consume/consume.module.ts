import { Module } from '@nestjs/common';
import { ConsumeService } from './consume.service';
import { ConsumeController } from './consume.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Consume, ConsumeSchema } from './entities/consume.entity';
import { Product, ProductSchema } from '../products/entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Consume.name, schema: ConsumeSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [ConsumeController],
  providers: [ConsumeService]
})
export class ConsumeModule {}
