type ArrSliceFn = <T>(arr: T[],debut:number,fin:number) => T[]

export const arrSlice : ArrSliceFn = <T>(arr: T[],debut:number,fin:number) : T[] => {
    let cpt : number = debut;
    let cptArr : number=0;
    let result : T[] = [];
    while(cpt < fin)
    {
        result[cptArr] = arr[cpt]
        cpt++;
        cptArr++;
    }
    return result;
};