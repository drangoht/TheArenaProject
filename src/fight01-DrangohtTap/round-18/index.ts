import { strLength } from "./strLength";

type CompareNFn = (strA: string, strB: string, n: number) => number

export const compareN  : CompareNFn  = (strA: string, strB: string, n: number): number  => {
    let cpt : number =0;
    let strMin : string = strA;
    let strMax : string = strB;
    let nbOverflowChars : number = 0;
    let nbMatches : number = 0;
    
    if(strLength(strA) > strLength(strB))
    {
        strMin = strB;
        strMax = strA;
    }
    if (n>strLength(strMin))
    {
        nbOverflowChars = n - strLength(strMin);
        if(nbOverflowChars>(strLength(strMax) - strLength(strMin)))
            nbOverflowChars = strLength(strMax) - strLength(strMin);
    }

    while(strMin[cpt] != undefined && cpt<n)
    {
        if(strMin[cpt] != strMax[cpt])
            nbMatches++;
        cpt++;
    }
 
    return nbMatches + nbOverflowChars;
    
};