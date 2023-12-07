import { quickSort } from "./index"
import { bubbleSort } from "./bubblesort";
import { mergeSort } from "./mergesort";
import { insertionSort } from "./insertionsort";

let arrToSort = [9, 8, 7, 6, 5, 4, 3, 2, 1];
//let arrToSort = [2, 1, 1, 2, 55, 9, -2, 8, 9, 23];
//let arrToSort = ['A', 'R', 'C', 'P', 'Z', 'B', 'C', 'A', 'N'];
//let arrToSort = ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''];//,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','­','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','­','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','­','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
//let arrToSort = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
// let size = 100000;
// const arrToSort = Array(size)
//     .fill(Math.round(Math.random() * size))
//     .map(() => Math.round(Math.random() * size));

// let start = new Date().getTime();
// let res = bubbleSort(arrToSort,(a,b)=> {return a>b?1:0;});
// let elapsed = new Date().getTime() - start;
// console.log("bubble",elapsed);

// start = new Date().getTime();
// res = insertionSort(arrToSort,(a,b)=> {return a>b?1:0;});
// elapsed = new Date().getTime() - start;
// console.log("insert",elapsed);
console.log(arrToSort);
let start = new Date().getTime();
let res = quickSort(arrToSort, (a, b) => { return a < b ? -1 : a > b ? 1 : 0; });
console.log(res);
let elapsed = new Date().getTime() - start;
console.log("merge", elapsed);
//console.log("après tri",res);
