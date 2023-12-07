type CallbackFn = (elem: any) => boolean
type FindFn = (arr: any[], cb: CallbackFn) => any

export const find  : FindFn  = (arr: any[], cb: CallbackFn) : any  => {
    let cpt : number = 0;
    while(arr[cpt] != undefined)
    {
        if(cb(arr[cpt]))
        {
            return arr[cpt];
        }
        cpt++;
    }
    return undefined;
};