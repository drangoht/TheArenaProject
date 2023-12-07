type ConcatNFn = (strA: string, strB: string, n: number) => string

export const concatN  : ConcatNFn  = (strA: string, strB: string, n: number): string  => {
    let cpt : number =0;
    let strResult : string = strA;

    while(strB[cpt] != undefined && cpt<n)
    {
        strResult += strB[cpt];
        cpt++;
    }
    return strResult;
};