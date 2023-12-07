type StrLengthFn = (str: string) => number

export const strLength : StrLengthFn = (str: string) : number => {
    let cpt : number = 0;
    while(str[cpt] != undefined)
    {
        cpt++;
    }
    return cpt;
};