export class CreateProductDto {
    name: string;
    type: string;
    brand : string;
    serving_size: number;
    serving_unity : number;
    protein : [number, string];
    barcode : string;
}
