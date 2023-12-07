type ArrLengthFn = (arr: number[]) => number

export const arrLength : ArrLengthFn = (arr: number[]) : number => {
    let cpt : number = 0;
    while(arr[cpt] != undefined)
    {
        cpt++;
    }
    return cpt;
};