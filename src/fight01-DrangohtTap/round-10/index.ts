type CallbackFn = (elem: any) => any
type MapFn = (arr: any[], cb: CallbackFn) => any[]

export const map  : MapFn  = (arr: any[], cb: CallbackFn) : any[]  => {
    let cpt : number = 0;
    let arrResult : any[] = [];
    while(arr[cpt] != undefined)
    {
        arrResult[cpt] = cb(arr[cpt]);
        cpt++;
    }
    return arrResult;
};