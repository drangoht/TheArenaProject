type ReverseStringFn = (str: string) => string

export const reverseString : ReverseStringFn  = (str: string) : string => {
    let cpt : number = 0;
    let strResult : string = "";
    while(str[cpt] != undefined)
    {
        strResult = "" +str[cpt] + strResult;
        cpt++;
    }
    return strResult;
};