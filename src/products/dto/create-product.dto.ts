export class CreateProductDto {
    name: string;
    type: string;
    brand : string;
    serving_size: {quantity: number, unity: string};
    protein : number;
    barcode : string;
}
