import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, ObjectId, Schema as MongooseSchema, SchemaType } from 'mongoose';
import { Product } from 'src/products/entities/product.entity';

export type ConsumeDocument = Consume & Document;

@Schema({ timestamps: true })
export class Consume {
    @Prop()
    user_id : string;

    /*@Prop({type: MongooseSchema.Types.ObjectId, ref: 'Product'})
    product_id : Product;*/
    
    @Prop()
    name: string;

    @Prop()
    amount_consumed: number;

    @Prop()
    portion: [number, number];

    @Prop()
    pku_consumed: number;

    @Prop()
    date_and_hour: Date;
}

export const ConsumeSchema = SchemaFactory.createForClass(Consume);
