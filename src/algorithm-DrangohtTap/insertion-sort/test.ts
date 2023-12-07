import { insertionSort } from "./index";


let arrToSort = [8,7,6,9,4,3,10,1,-2];

console.log(insertionSort(arrToSort,(a,b)=> {return a>b?1:0;}));