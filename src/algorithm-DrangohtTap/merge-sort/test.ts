import { bubbleSort } from "./bubblesort";
import { mergeSort } from "./index";
import { insertionSort } from "./insertionsort";


let arrToSort = [8,7,6,9,4,3,10,1,-2];
//let arrToSort = ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''];//,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','­','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','­','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','­','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
//let arrToSort = ["","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
// let size = 100000;
// const arrToSort = Array(size)
// .fill(Math.round(Math.random() * size))
// .map(() => Math.round(Math.random() * size));

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
let res = mergeSort(arrToSort,(a,b)=> {return a<b?-1:a>b?1:0;});
console.log(res);
let elapsed = new Date().getTime() - start;
console.log("merge",elapsed);
//console.log("après tri",res);
