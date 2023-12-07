type SplitFn = (str: string) => string[]

export const split : SplitFn = (str: string) : string[] => {
    let cpt : number = 0;
    let arrResult : string[] = [];
    while(str[cpt] != undefined)
    {
        arrResult[cpt] = str[cpt];
        cpt++;
    }
    return arrResult;
};