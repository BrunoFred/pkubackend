import { Optional } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsMongoId, IsNotEmpty, IsNumber, IsDate, IsDateString } from "class-validator";

export class CreateConsumeDto {
    @IsMongoId()
    @IsNotEmpty()
    user_id: string;

    @IsMongoId()
    @IsNotEmpty()
    product_id: string;

    @IsNotEmpty()
    @IsNumber()
    amount_consumed: number;

    pku_consumed: number;

    @IsNotEmpty()
    date = new Date().toISOString;
}