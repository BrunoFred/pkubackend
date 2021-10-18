import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConsumeDto } from './dto/create-consume.dto';
import { UpdateConsumeDto } from './dto/update-consume.dto';
import { Consume, ConsumeDocument } from './entities/consume.entity';
import { calculateFenilalaninaPerConsume } from '../utils/pkuCalculator';
import { Product, ProductDocument } from '../products/entities/product.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class ConsumeService {

  constructor(
    private readonly productsService: ProductsService,

    @InjectModel(Consume.name)
    private consumeModel: Model<ConsumeDocument>,

    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>
)
{}

  async create(createConsumeDto: CreateConsumeDto) {
    createConsumeDto.pku_consumed = calculateFenilalaninaPerConsume(createConsumeDto);
    const product = await this.findOne(createConsumeDto.name);
    console.log(product)
    const consume = new this.consumeModel(createConsumeDto);
    return consume.save(function(err, doc){
      if (err) return console.error(err);
      console.log("Document inserted succesfully!");
    });
  }

  findAll() {
    return this.consumeModel.find();
  }

  async findOne(id: string) {
    const product = await this.productsService.findOne(id);
    console.log("product", product);
    return product;
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
