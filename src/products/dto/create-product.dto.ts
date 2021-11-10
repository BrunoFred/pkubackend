import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
    name: string;

    brand : string;

    @IsNotEmpty()
    @IsNumber()
    serving_size: number;

    @IsNotEmpty()
    @IsNumber()
    protein : number;

    barcode : string;
}
