type PopFn = (arr: any[]) => any[]

export const pop : PopFn  = (arr: any[]) : any[] => {
    let cpt : number = 1;
    let resultArr : any[] = [];
    
    if(arr.length>1)
    {
        while(cpt <arr.length)
        {
            resultArr.push(arr[cpt]);
            cpt++;
        }
    }
    return resultArr;
};