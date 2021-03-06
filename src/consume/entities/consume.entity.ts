import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, ObjectId, Schema as MongooseSchema, SchemaType } from 'mongoose';
import { Product } from 'src/products/entities/product.entity';

export type ConsumeDocument = Consume & Document;

@Schema({ timestamps: true })
export class Consume {
    @Prop()
    user_id : string;
    
    @Prop()
    product_id: string;

    @Prop()
    amount_consumed: number;

    @Prop()
    pku_consumed: number;
}

export const ConsumeSchema = SchemaFactory.createForClass(Consume);
