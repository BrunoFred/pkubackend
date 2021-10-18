import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConsumeDto } from './dto/create-consume.dto';
import { UpdateConsumeDto } from './dto/update-consume.dto';
import { Consume, ConsumeDocument } from './entities/consume.entity';
import { calculateFenilalaninaPerConsume } from '../utils/pkuCalculator';
import { Product, ProductDocument } from '../products/entities/product.entity';

@Injectable()
export class ConsumeService {

  constructor(
    @InjectModel(Consume.name)
    private consumeModel: Model<ConsumeDocument>,

    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>
)
{}

  create(createConsumeDto: CreateConsumeDto) {
    createConsumeDto.pku_consumed = calculateFenilalaninaPerConsume(createConsumeDto);
    const amount = this.findOne(createConsumeDto.name);
    console.log(amount)
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
    return this.findProductById(id);
    }

  findProductById(id: string): any{
    return this.productModel.findById(id, function (err, docs) {
      if (err){
        console.log(err);
      }
      else{
        console.log("Result : ", docs);
      }
    });
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
