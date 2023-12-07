type ArrLengthFn = <T>(arr: T[]) => number

export const arrLength : ArrLengthFn = <T>(arr: T[]) : number => {
    let cpt : number = 0;
    while(arr[cpt] != undefined)
    {
        cpt++;
    }
    return cpt;
};