type PowerFn = (nb: number, power: number) => number

export const iterativePower    : PowerFn  = (nb: number, power: number) : number  => {
    let result : number =nb;
    let cpt : number = 1;
    if(power===0)
        return 1;
    while(cpt<power)
    {
        result = result * nb;
        cpt++;
    }
    return result;
}