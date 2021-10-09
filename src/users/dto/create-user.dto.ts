export class CreateUserDto {
    name: string;
    password: string;
    email: string;
    phone_number: string;
    birth_date: Date;
    weight: {weight: number, date: Date};
}
