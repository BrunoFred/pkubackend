import { ObjectId } from "mongoose";

export class CreateConsumeDto {
    user_id: string;
    name: string;
    amount_consumed: {quantity: number, unity: string};
    pku_consumed: number;
    date_and_hour: Date;
}
