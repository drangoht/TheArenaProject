import { arrLength } from "./arrlength";
type CompareFn<T> = (a: T, b: T) => number
type SortFn = <T>(arr: T[], cmp: CompareFn<T>) => T[]

const copyArray = <T>(arrSource: T[]): T[] => {
    let cptArray: number = 0;
    let copiedArray: T[] = [];
    while (arrSource[cptArray] != undefined) {
        copiedArray[cptArray] = arrSource[cptArray];
        cptArray++;
    }
    return copiedArray;
}
const swap = <T>(arr: T[], origin: number, dest: number) => {
    let tmpSwap = arr[origin];
    arr[origin] = arr[dest];
    arr[dest] = tmpSwap;
}
const getPivot = <T>(arr: T[], lo: number, hi: number): T => {
    return arr[hi - 1];//arr[((hi + lo) / 2) | 0];
}
const partition = <T>(arr: T[], lo: number, hi: number, cmp: CompareFn<T>): number => {

    let pivot = getPivot(arr, lo, hi);
    let up = lo;
    let down = hi;
    while (up <= down) {
        while (cmp(arr[up], pivot) < 0) {
            up++;
        }
        while (cmp(arr[down], pivot) > 0) {
            down--;
        }
        if (up <= down) {
            swap(arr, up, down);
            up++;
            down--;
        }
    }
    return up;
}
const quickSortRecurse = <T>(arr: T[], lo: number, hi: number, cmp: CompareFn<T>): T[] => {
    let index = 0;
    if (arrLength(arr) > 1) {
        index = partition(arr, lo, hi, cmp);
        if (lo < index - 1) {
            quickSortRecurse(arr, lo, index - 1, cmp);
        }
        if (index < hi) {
            quickSortRecurse(arr, index, hi, cmp);
        }
    }
    return arr;
}

export const quickSort: SortFn = <T>(arr: T[], cmp: CompareFn<T>): T[] => {
    let copiedArray: T[] = copyArray(arr);
    return quickSortRecurse(copiedArray, 0, arrLength(copiedArray) - 1, cmp);
}