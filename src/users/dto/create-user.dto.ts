import { IsEmail } from "class-validator";

export class CreateUserDto {
    name: string;
    password: string;
    @IsEmail()
    email: string;
    phone_number: string;
    birth_date: Date;
    weight: {weight: number, date: Date};
    age: number;
    maxQttPkuDay: number;
    minQttPkuDay: number;
}
