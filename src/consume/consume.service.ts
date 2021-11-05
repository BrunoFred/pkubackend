import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConsumeDto } from './dto/create-consume.dto';
import { UpdateConsumeDto } from './dto/update-consume.dto';
import { Consume, ConsumeDocument } from './entities/consume.entity';
import { calculateFenilalaninaPerConsume } from '../utils/pkuCalculator';
import { Product, ProductDocument } from '../products/entities/product.entity';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { ProductsService } from '../products/products.service';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';

@Injectable()
export class ConsumeService {

  constructor(
    @InjectModel(Consume.name)
    private consumeModel: Model<ConsumeDocument>,

    private readonly productsService: ProductsService,

    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>
)
{}

  async create(createConsumeDto: CreateConsumeDto) {
    const product = await this.findOne(createConsumeDto.product_id);
    createConsumeDto.pku_consumed = calculateFenilalaninaPerConsume(createConsumeDto, product);
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
    return product;
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

  async update(id: string, updateConsumeDto: UpdateConsumeDto) {
    return this.consumeModel.findOneAndUpdate({_id : id}, {$set: updateConsumeDto}, {new: true});
  }

  remove(id: string) {
    return this.consumeModel.deleteOne({_id : id}).exec();
  }
}
