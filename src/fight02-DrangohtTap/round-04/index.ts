type FibonacciFn = (n: number) => number

export const fibonacci : FibonacciFn  = (nb: number) : number  => {
    if(nb===2 ||nb===1)
        return nb-1;
    return fibonacci(nb-1) + fibonacci(nb-2);
}