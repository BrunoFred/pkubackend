import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { getAge, maxAndMinPkuDay } from '../utils/pkuCalculator';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.age = getAge(createUserDto);
    const daily_pku = maxAndMinPkuDay(createUserDto);
    createUserDto.maxQttPkuDay = daily_pku.max;
    createUserDto.minQttPkuDay = daily_pku.min;
    const user = new this.userModel(createUserDto);
    return user.save(function(err, doc) {
      if (err) return console.error(err);
      console.log("Document inserted successfully!");
    });
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findOneAndUpdate({_id: id}, {$set: updateUserDto}, {new: true});
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id: id}).exec();
  }
}
