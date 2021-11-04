import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
    @Prop()
    name: string;

    @Prop()
    brand: string;

    @Prop({
        required: true
    })
    serving_size: number;

    @Prop({
        required: true
    })
    protein : number;

    @Prop()
    barcode : string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
