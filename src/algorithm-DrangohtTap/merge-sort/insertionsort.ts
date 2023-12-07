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

export const insertionSort : SortFn = <T>(arr: T[], cmp: CompareFn<T>) : T[] => {
    let cptArray : number = 0;
    let cle : number = 0;
    let curIndex : number = 0;
    let copiedArray : T[] = copyArray(arr);

    while (copiedArray[cptArray] != undefined)
    {
        cle = cptArray;
        curIndex=cptArray;
        
        while((curIndex >0) && (cmp(copiedArray[curIndex-1],arr[cle])>0))
        {
            copiedArray[curIndex] = copiedArray[curIndex-1];
            curIndex--;
        }
        copiedArray[curIndex] = arr[cle];
        cptArray++;
    }  
    return copiedArray;
}