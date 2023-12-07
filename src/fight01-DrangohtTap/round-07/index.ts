import { arrLength } from "./arrLength";
type ReverseNumbersFn = (numbers: number[]) => number[]

export const reverseNumbers  : ReverseNumbersFn  = (numbers: number[]) :number[] => {
    let cpt : number = arrLength(numbers)-1;
    let cptResult : number = 0;
    let arrResult : number[] = [];
    while(cpt>=0)
    {
        arrResult[cptResult] = numbers[cpt];
        cpt--;
        cptResult++;
    }
    return arrResult;
};