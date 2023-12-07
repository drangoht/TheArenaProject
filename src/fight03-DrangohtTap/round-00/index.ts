import { recursivePower } from "./recursivepower";
type AtoiFn = (str: string) => number
const BASE10STRINGNUMBERS : string = "0123456789";

const getNumberFromBase10String = (str: string)  : number => {
    let base10StringNumbers : string = "0123456789";
    let cpt : number = 0;
    while (cpt < base10StringNumbers.length) {
        if (base10StringNumbers[cpt] === str)
            return cpt;
        cpt++;
    }
    return -1;
}
export const atoi : AtoiFn = (str: string) : number => {
    let cptChar : number = 0;
    let signNumber : number = 1;
    let currentDigit : number = 0;
    let result : number = 0;
    let baseMutliple : number = 1;
    if(str[0] === "-")
    {
        signNumber = -1;
        cptChar=1;
    }
    if(str[cptChar] === "+")
    {
        cptChar=1;
    }
    while(cptChar < str.length)
    {
        if(str[cptChar] !== "0")
        {
            currentDigit = getNumberFromBase10String(str[cptChar]);
            if(currentDigit === -1)
            {
                return NaN;
            }
            baseMutliple = (str.length - cptChar-1);
            result += currentDigit * recursivePower(10,baseMutliple);
            
        }
        cptChar++;
    }
    return result*signNumber;
}