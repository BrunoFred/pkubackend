export class CreateConsumeDto {
    name: string;
    amount_consumed: [number, string];
    amount_unity: number;
    pku_consumed: number;
    date_and_hour: Date = new Date();
}
