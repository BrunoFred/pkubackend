import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    name: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    phone_number: string;

    @IsNotEmpty()
    birth_date: Date;

    @IsNotEmpty()
    weight: {weight: number, date: Date};

    age: number;

    maxQttPhenylalanineDay: number;

    minQttPhenylalanineDay: number;
}
