import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { type } from 'os';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
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
