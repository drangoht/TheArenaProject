type PushFn = (arr: any[], item: any) => void

export const push : PushFn  = (arr: any[], item: any) => {
    let cpt : number = 0;
    while(arr[cpt] != undefined)
    {
        cpt++;
    }
    arr[cpt] = item;
};