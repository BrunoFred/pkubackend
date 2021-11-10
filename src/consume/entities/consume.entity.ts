import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, isValidObjectId, Mongoose, ObjectId, Schema as MongooseSchema, SchemaType } from 'mongoose';

export type ConsumeDocument = Consume & Document;

@Schema()
export class Consume {
    @Prop({
        required: true
    })
    user_id : string;
    
    @Prop({
        required: true
    })
    product_id: string;

    @Prop({
        required: true
    })
    amount_consumed: number;

    @Prop()
    pku_consumed: number;

    @Prop({
        required: true
    })
    date: Date;
}

export const ConsumeSchema = SchemaFactory.createForClass(Consume);
