export function phenylalanine(qtdProteinas: number){
    return qtdProteinas * 0.05;
}

export function calculatePhenylalaninePerConsume(createConsumeDto, product) : any{
    let regraDeTres = (createConsumeDto.amount_consumed*product.protein)/product.serving_size;
    let pku_consumed = phenylalanine(regraDeTres);
    return pku_consumed;
}

