import { recursivePower } from "./recursivepower";
type ItoaFn = (nb: number) => string
const BASE10STRINGNUMBERS : string = "0123456789";

const getStringFromBase10String = (nb: number)  : string => {
    let base10StringNumbers : string = "0123456789";
    return base10StringNumbers[nb];
}
export const itoa : ItoaFn = (nb: number) : string => {
    let result : string = "";
    let nbToProcess : number = nb;
    let currentDigit : number = 1;
    let remain : number = 0;
    let sign : string = "";
    
    if(nbToProcess===0) 
    {
        if(1/nbToProcess === -Infinity)
            sign="-";
        return sign + getStringFromBase10String(nbToProcess);
    }
    if(nb <0)
    {
        sign="-";
        nbToProcess *=-1;
    }
    while(nbToProcess>0)
    {
        remain = nbToProcess % recursivePower(10,currentDigit); // remainder
        result = getStringFromBase10String((remain / recursivePower(10,currentDigit-1))) + result; 
        nbToProcess -= remain;
        currentDigit++;
    }
    return sign + result;
}