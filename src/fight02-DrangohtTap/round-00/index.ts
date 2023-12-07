type FactorialFn = (nb: number) => number;

export const iterativeFactorial   : FactorialFn  = (nb: number) : number  => {
    let result : number = 1;
    let cpt : number = 1;
    while(cpt<=nb)
    {
        result = cpt * result;
        cpt++;
    }
    return result
}