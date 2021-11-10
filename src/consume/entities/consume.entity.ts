import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { Document, isValidObjectId, Mongoose, ObjectId, Schema as MongooseSchema, SchemaType } from 'mongoose';

export type ConsumeDocument = Consume & Document;

@Schema()
export class Consume {
    @IsNotEmpty()
    @Prop()
    user_id : string;
    
    @IsNotEmpty()
    @Prop()
    product_id: string;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    amount_consumed: number;

    @Prop()
    pku_consumed: number;

    @IsNotEmpty()
    @IsDateString()
    @Prop()
    date: Date;
}

export const ConsumeSchema = SchemaFactory.createForClass(Consume);
