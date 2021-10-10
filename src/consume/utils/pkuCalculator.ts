import { CreateConsumeDto } from "../dto/create-consume.dto";
import { fenilalanina } from "./constants";


export function calculateY(qtdProteinas: number, createConsumeDto) : any{
    let calculated = fenilalanina(qtdProteinas);

    createConsumeDto.pku_consumed = calculated;

    return createConsumeDto;
}