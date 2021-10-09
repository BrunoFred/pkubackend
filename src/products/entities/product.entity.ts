import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    name: string;

    @Prop()
    type: string;

    @Prop()
    brand: string;

    @Prop()
    serving_size: [number, string];

    @Prop()
    protein : number;

    @Prop()
    barcode : string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
