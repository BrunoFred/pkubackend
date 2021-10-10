import { Optional } from "@nestjs/common";

export class CreateConsumeDto {
    user_id: string;
    name: string;
    amount_consumed: {quantity: number, unity: string};
    @Optional()
    pku_consumed: number;
    date_and_hour: Date;
}
