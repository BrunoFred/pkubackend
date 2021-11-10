export function maxAndMinPhenylalanineDay(createUserDto) : any{
    let minPhenylalanineday;
    let maxPhenylalanineday;
    if (createUserDto.age >= 0 && createUserDto.age < 0.5){
        minPhenylalanineday = 20 * createUserDto.weight[0];
        maxPhenylalanineday = 70 * createUserDto.weight[0];
    }
    else 
        if (createUserDto.age >= 0.5 && createUserDto.age < 1){
            minPhenylalanineday = 15 * createUserDto.weight[0];
            maxPhenylalanineday = 50 * createUserDto.weight[0];
        }
        else 
            if (createUserDto.age >= 1 && createUserDto.age < 4){
                minPhenylalanineday = 15 * createUserDto.weight[0];
                maxPhenylalanineday = 40 * createUserDto.weight[0];
            }
            else 
                if (createUserDto.age >= 4 && createUserDto.age < 7){
                    minPhenylalanineday = 15 * createUserDto.weight[0];
                    maxPhenylalanineday = 35 * createUserDto.weight[0];
                }
                else 
                    if (createUserDto.age >= 7 && createUserDto.age < 15){
                        minPhenylalanineday = 15 * createUserDto.weight[0];
                        maxPhenylalanineday = 30 * createUserDto.weight[0];
                    }
                    else 
                        if (createUserDto.age >= 15 && createUserDto.age < 19){
                            minPhenylalanineday = 10 * createUserDto.weight[0];
                            maxPhenylalanineday = 30 * createUserDto.weight[0];
                        }
                        else{
                            return false;
                        }

    return{
        min: minPhenylalanineday,
        max: maxPhenylalanineday
    };
}