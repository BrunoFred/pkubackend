import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, isValidObjectId, Mongoose, ObjectId, Schema as MongooseSchema, SchemaType } from 'mongoose';

export type ConsumeDocument = Consume & Document;

@Schema()
export class Consume {
    @Prop()
    user_id : string;
    
    @Prop()
    product_id: string;

    @Prop()
    amount_consumed: number;

    @Prop()
    pku_consumed: number;

    @Prop()
    date: Date;
}

export const ConsumeSchema = SchemaFactory.createForClass(Consume);
