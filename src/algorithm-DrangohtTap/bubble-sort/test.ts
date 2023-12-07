import { bubbleSort } from "./index";


let arrToSort = [8,7,6,9,4,3,10,1,-2];
console.log("avant tri",arrToSort);
console.log("après tri",bubbleSort(arrToSort,(a,b)=> {return a<b?1:0;}));