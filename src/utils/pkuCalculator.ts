import { CreateConsumeDto } from "../consume/dto/create-consume.dto";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { fenilalanina } from "./constants";

export function calculateY(qtdProteinas: number, createConsumeDto) : any{
    let calculated = fenilalanina(qtdProteinas);
    createConsumeDto.pku_consumed = calculated;
    return createConsumeDto;
}

export function getAge(createUserDto) : any{
    let today = Date.now(); // pega data de agora em ms
    let birthday = Date.parse(createUserDto.birth_date); // passa a data de nascimento pra ms
    let getAge = Math.abs(birthday - today); // faz a diferença de ms entre as 2 datas
    let daysBetweenDates: number = Math.ceil(getAge / (1000 * 60 * 60 * 24)); // transforma de ms para dias
    return Math.floor(daysBetweenDates / 365); // passa de dias para anos e tira valor float
}

export function maxAndMinPkuDay(createUserDto) : any{
    let minPkuDay;
    let maxPkuDay;
    if (createUserDto.age >= 0 && createUserDto.age < 0.5){
        minPkuDay = 20 * createUserDto.weight[0];
        maxPkuDay = 70 * createUserDto.weight[0];
    }

        if (createUserDto.age >= 0.5 && createUserDto.age < 1){
            minPkuDay = 15 * createUserDto.weight[0];
            maxPkuDay = 50 * createUserDto.weight[0];
        }

            if (createUserDto.age >= 1 && createUserDto.age < 4){
                minPkuDay = 15 * createUserDto.weight[0];
                maxPkuDay = 40 * createUserDto.weight[0];
            }

                if (createUserDto.age >= 4 && createUserDto.age < 7){
                    minPkuDay = 15 * createUserDto.weight[0];
                    maxPkuDay = 35 * createUserDto.weight[0];
                }

                    if (createUserDto.age >= 7 && createUserDto.age < 15){
                        minPkuDay = 15 * createUserDto.weight[0];
                        maxPkuDay = 30 * createUserDto.weight[0];
                    }

                        if (createUserDto.age >= 15 && createUserDto.age < 19){
                            minPkuDay = 10 * createUserDto.weight[0];
                            maxPkuDay = 30 * createUserDto.weight[0];
                        }

    return{
        min: minPkuDay,
        max: maxPkuDay
    };
}

