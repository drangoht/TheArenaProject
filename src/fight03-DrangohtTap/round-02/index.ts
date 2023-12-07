import { recursivePower } from "./recursivepower";
type ItobinFn = (nb: number) => string

const getStringFromBase10String = (nb: number)  : string => {
    let base10StringNumbers : string = "0123456789";
    return base10StringNumbers[nb];
}
export const itobin : ItobinFn = (nb: number) : string => {
    let result : string = "";
    let nbToProcess : number = nb;
    let base : number = 2;
    let remain : number = 0;
    let sign : string = "";
    
    if(nbToProcess===0) 
    {
        if(1/nbToProcess === -Infinity)
            sign="-";
        return sign + getStringFromBase10String(nbToProcess);
    }
    
    if(nbToProcess <0)
    {
        sign="-";
        nbToProcess *=-1;
    }
    while(nbToProcess>0)
    {
        remain = nbToProcess %  base; // remainder
        result = getStringFromBase10String(remain) + result; 
        nbToProcess = Math.floor(nbToProcess/base);
    }
    return sign + result;
}