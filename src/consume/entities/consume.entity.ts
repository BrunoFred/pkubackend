import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConsumeDocument = Consume & Document;

@Schema()
export class Consume {
    @Prop()
    name: string;

    @Prop()
    amount_consumed: [number, string];

    @Prop()
    amount_unity: number;

    @Prop()
    pku_consumed: number;

    @Prop()
    date_and_hour: Date = new Date();
}

export const ConsumeSchema = SchemaFactory.createForClass(Consume);
