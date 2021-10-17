import { Optional } from "@nestjs/common";

export class CreateConsumeDto {
    user_id: string;
    /*product_id : string;*/
    name: string;
    amount_consumed: number;
    portion: {value: number, proteins: number};
    pku_consumed: number;
    date_and_hour: Date;
}
