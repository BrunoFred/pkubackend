import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { type } from 'os';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop({
    required: true
  })
  password: string;

  @Prop({
    unique: true,
    required: true
  })
  email: string;

  @Prop()
  phone_number: string;

  @Prop({
    required: true
  })
  birth_date: Date;

  @Prop({
    required: true
  })
  weight: [number, Date];

  @Prop()
  age: number;

  @Prop()
  maxQttPhenylalanineDay: number;

  @Prop()
  minQttPhenylalanineDay: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
