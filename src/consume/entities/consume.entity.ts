import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsDateString, IsNumber } from 'class-validator';
import { Document, isValidObjectId, Mongoose, ObjectId, Schema as MongooseSchema, SchemaType } from 'mongoose';
import { Product } from 'src/products/entities/product.entity';

export type ConsumeDocument = Consume & Document;

@Schema()
export class Consume {
    @Prop()
    user_id : string;
    
    @Prop()
    product_id: string;

    @IsNumber()
    @Prop()
    amount_consumed: number;

    @Prop()
    pku_consumed: number;

    @IsDateString()
    @Prop()
    date: Date;
}

export const ConsumeSchema = SchemaFactory.createForClass(Consume);
