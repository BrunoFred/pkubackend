import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';

export type ConsumeDocument = Consume & Document;

@Schema()
export class Consume {
    @Prop()
    user_id : string;
    
    @Prop()
    name: string;

    @Prop()
    amount_consumed: [number, string];

    @Prop()
    portion: [number, number];

    @Prop()
    pku_consumed: number;

    @Prop()
    date_and_hour: Date;
}

export const ConsumeSchema = SchemaFactory.createForClass(Consume);
