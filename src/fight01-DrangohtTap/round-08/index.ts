type IndexOfFn = (arr: any[], elem: any) => number

export const indexOf  : IndexOfFn  = (arr: any[], elem: any) :number => {
    let cpt : number = 0;
    let cptResult : number = -1;
    while(arr[cpt] != undefined)
    {
        if(arr[cpt] === elem && cptResult==-1)
            cptResult = cpt;
        cpt++;
    }
    return cptResult;
};