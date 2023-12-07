import { arrLength } from "./arrlength";
import { arrSlice} from "./arrslice";
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
const fusionArray = <T>(arrGauche:T[],arrDroite:T[], cmp: CompareFn<T>) : T[] => {
    let cptGauche = 0;
    let cptDroite = 0;
    let cptFusion = 0;
    let arrFusion :T[] = [];
    while((cptGauche<arrLength(arrGauche)) || (cptDroite<arrLength(arrDroite)))
    {
        if(arrGauche[cptGauche]!== undefined)
        {
            if(arrDroite[cptDroite] === undefined)
            {
                arrFusion[cptFusion]=arrGauche[cptGauche]; 
                cptGauche++;
            }
            else
            {
                if(cmp(arrDroite[cptDroite],arrGauche[cptGauche])>=0)
                {
                    arrFusion[cptFusion]=arrGauche[cptGauche]; 
                    cptGauche++;
                }
                else
                {
                    arrFusion[cptFusion]=arrDroite[cptDroite];
                    cptDroite++
                }
            }
        }
        else
        {
            if(arrDroite[cptDroite]!== undefined)
            {
                arrFusion[cptFusion]=arrDroite[cptDroite];
                cptDroite++
            }
        }
        cptFusion++;
    }
    return arrFusion;
}
const mergeSortRecurse = <T>(arr:T[], cmp: CompareFn<T>) : T[] => {


    if (arrLength(arr) < 2)
        return arr;

    let centre : number = (arrLength(arr)/2)|0; // Diviser

    let arrGauche = mergeSortRecurse(arrSlice(arr, 0, centre),cmp); // Conquérir
    let arrDroite = mergeSortRecurse(arrSlice(arr, centre, arrLength(arr)),cmp); // Conquérir
    return fusionArray(arrGauche,arrDroite,cmp); // Fusionner
}

export const mergeSort : SortFn = <T>(arr: T[], cmp: CompareFn<T>) : T[] => {
    let copiedArray : T[] = copyArray(arr);
    return mergeSortRecurse(copiedArray,cmp);
}