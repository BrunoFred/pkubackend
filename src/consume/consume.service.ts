import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateConsumeDto } from './dto/create-consume.dto';
import { UpdateConsumeDto } from './dto/update-consume.dto';
import { Consume, ConsumeDocument } from './entities/consume.entity';
import { calculateY } from '../utils/pkuCalculator';

@Injectable()
export class ConsumeService {

  constructor(@InjectModel(Consume.name) private consumeModel: Model<ConsumeDocument>) {}

  create(createConsumeDto: CreateConsumeDto) {
    createConsumeDto = calculateY(1.8, createConsumeDto);
    const consume = new this.consumeModel(createConsumeDto);
    return consume.save(function(err, doc){
      if (err) return console.error(err);
      console.log("Document inserted succesfully!");
    });
  }

  findAll() {
    return this.consumeModel.find();
  }

  findOne(id: string) {
    return this.consumeModel.findById(id);
  }

  findUserId(user_id: string){
    return this.consumeModel.find({user_id});
  }

  update(id: string, updateConsumeDto: UpdateConsumeDto) {
    return this.consumeModel.findOneAndUpdate({_id : id}, {$set: updateConsumeDto}, {new: true});
  }

  remove(id: string) {
    return this.consumeModel.deleteOne({_id : id}).exec();
  }
}
