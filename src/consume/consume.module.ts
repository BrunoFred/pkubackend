import { Module } from '@nestjs/common';
import { ConsumeService } from './consume.service';
import { ConsumeController } from './consume.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Consume, ConsumeSchema } from './entities/consume.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Consume.name, schema: ConsumeSchema }])],
  controllers: [ConsumeController],
  providers: [ConsumeService]
})
export class ConsumeModule {}
