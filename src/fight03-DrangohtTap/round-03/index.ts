import { recursivePower } from "./recursivepower";
type ItohexFn = (nb: number) => string
const getStringFromBase10String = (nb: number)  : string => {
    let base10StringNumbers : string = "0123456789";
    return base10StringNumbers[nb];
}

const getStringFromBase16String = (nb: number)  : string => {
    let base16StringNumbers : string = "0123456789ABCDEF";
    return base16StringNumbers[nb];
}
export const itohex : ItohexFn = (nb: number) : string => {
    let result : string = "";
    let nbToProcess : number = nb;
    let base : number = 16;
    let remain : number = 0;
    let sign : string = "";
    
    if(nbToProcess===0) 
    {
        if(1/nbToProcess === -Infinity)
            sign="-";
        return sign + getStringFromBase16String(nbToProcess);
    }
    
    if(nbToProcess <0)
    {
        sign="-";
        nbToProcess *=-1;
    }
    while(nbToProcess>0)
    {
        remain = nbToProcess %  base; // remainder
        result = getStringFromBase16String(remain) + result; 
        nbToProcess = Math.floor(nbToProcess/base);
    }
    return sign + result;
}