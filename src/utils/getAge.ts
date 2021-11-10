export function getAge(createUserDto) : any{
    let today = Date.now();
    let birthday = Date.parse(createUserDto.birth_date);
    let getAge = Math.abs(birthday - today);
    let daysBetweenDates: number = Math.ceil(getAge / (1000 * 60 * 60 * 24));
    return (Math.floor((daysBetweenDates / 365)*100)/100);
}