type CallbackFn = (elem: any) => boolean
type EveryFn = (arr: any[], cb: CallbackFn) => boolean

export const every  : EveryFn  = (arr: any[], cb: CallbackFn) : boolean  => {
    let cpt : number = 0;
    while(arr[cpt] != undefined)
    {
        if(!cb(arr[cpt]))
        {
            return false;
        }
        cpt++;
    }
    return true;
};