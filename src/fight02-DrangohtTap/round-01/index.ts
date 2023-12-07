type FactorialFn = (nb: number) => number;

export const recursiveFactorial   : FactorialFn  = (nb: number) : number  => {
    if(nb===0)
        return 1;
    return nb * recursiveFactorial(nb-1);
}