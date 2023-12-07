type CallbackFn = (elem: any) => boolean
type SomeFn = (arr: any[], cb: CallbackFn) => boolean

export const some  : SomeFn  = (arr: any[], cb: CallbackFn) : boolean  => {
    let cpt : number = 0;
    while(arr[cpt] != undefined)
    {
        if(cb(arr[cpt]))
        {
            return true;
        }
        cpt++;
    }
    return false;
};