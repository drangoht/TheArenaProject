type CallbackFn = (elem: any) => boolean
type FilterFn = (arr: any[], cb: CallbackFn) => any[]

export const filter  : FilterFn  = (arr: any[], cb: CallbackFn) : any[]  => {
    let cpt : number = 0;
    let cptResult : number = 0;
    let arrResult : any[] = [];
    while(arr[cpt] != undefined)
    {
        if(cb(arr[cpt]))
        {
            arrResult[cptResult] = arr[cpt];
            cptResult++;
        }
        cpt++;
    }
    return arrResult;
};