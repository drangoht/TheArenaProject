type CallbackFn = (elem: any) => any
type ForEachFn = (arr: any[], cb: CallbackFn) => void

export const forEach  : ForEachFn  = (arr: any[], cb: CallbackFn)  => {
    let cpt : number = 0;
    while(arr[cpt] != undefined)
    {
        cb(arr[cpt]);
        cpt++;
    }
};