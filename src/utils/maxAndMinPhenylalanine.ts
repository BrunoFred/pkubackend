export function maxAndMinPhenylalanineDay(createUserDto) : any{
    let minPkuDay;
    let maxPkuDay;
    if (createUserDto.age >= 0 && createUserDto.age < 0.5){
        minPkuDay = 20 * createUserDto.weight[0];
        maxPkuDay = 70 * createUserDto.weight[0];
    }
    else 
        if (createUserDto.age >= 0.5 && createUserDto.age < 1){
            minPkuDay = 15 * createUserDto.weight[0];
            maxPkuDay = 50 * createUserDto.weight[0];
        }
        else 
            if (createUserDto.age >= 1 && createUserDto.age < 4){
                minPkuDay = 15 * createUserDto.weight[0];
                maxPkuDay = 40 * createUserDto.weight[0];
            }
            else 
                if (createUserDto.age >= 4 && createUserDto.age < 7){
                    minPkuDay = 15 * createUserDto.weight[0];
                    maxPkuDay = 35 * createUserDto.weight[0];
                }
                else 
                    if (createUserDto.age >= 7 && createUserDto.age < 15){
                        minPkuDay = 15 * createUserDto.weight[0];
                        maxPkuDay = 30 * createUserDto.weight[0];
                    }
                    else 
                        if (createUserDto.age >= 15 && createUserDto.age < 19){
                            minPkuDay = 10 * createUserDto.weight[0];
                            maxPkuDay = 30 * createUserDto.weight[0];
                        }
                        else{
                            return false;
                        }

    return{
        min: minPkuDay,
        max: maxPkuDay
    };
}