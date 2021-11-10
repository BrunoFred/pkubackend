import { Optional } from "@nestjs/common";

export class CreateConsumeDto {
    user_id: string;
    product_id: string;
    amount_consumed: number;
    pku_consumed: number;
    date = Date;
}