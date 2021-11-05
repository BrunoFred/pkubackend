import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { nextTick } from 'process';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop({
    unique: true
  })
  email: string;

  @Prop()
  phone_number: string;

  @Prop()
  birth_date: Date;

  @Prop()
  weight: [number, Date];

  @Prop()
  age: number;

  @Prop()
  maxQttPkuDay: number;

  @Prop()
  minQttPkuDay: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function(next: mongoose.HookNextFunction){
  const hashed = await bcrypt.hash(this['password'], 10);
  this['password'] = hashed;
  return next();
});
