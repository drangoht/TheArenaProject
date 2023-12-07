type CompareFn<T> = (a: T, b: T) => number
type SortFn = <T>(arr: T[], cmp: CompareFn<T>) => T[]

const copyArray = <T>(arrSource: T[]) : T[] => {
    let cptArray : number = 0;
    let copiedArray : T[] = [];
    while (arrSource[cptArray] != undefined)
    {
        copiedArray[cptArray] = arrSource[cptArray];
        cptArray++;
    }
    return copiedArray;
}

export const bubbleSort : SortFn = <T>(arr: T[], cmp: CompareFn<T>) : T[] => {
    let idxSearch : number = 0;
    let idxCompare : number = 0;
    let copiedArray : T[] = copyArray(arr);
    let tmpBubble : T = copiedArray[0]; // on récupère le typage du tableau
    while (copiedArray[idxSearch] != undefined)
    {
        idxCompare=0;
        while(copiedArray[idxCompare+1] != undefined )
        {
            if(cmp(copiedArray[idxCompare],copiedArray[idxCompare+1])>0)
            {
                tmpBubble = copiedArray[idxCompare+1];
                copiedArray[idxCompare+1]=copiedArray[idxCompare];
                copiedArray[idxCompare] = tmpBubble;
                
            }
            idxCompare++;
        }
        idxSearch++;
    }  
    return copiedArray;
}