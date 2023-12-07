import  {compareN} from "./index";

console.log(compareN("hello", "habbo", 3));
// 2
console.log(compareN("hello", "habbo", 30));
// 3
console.log(compareN("julius", "julius2", 7));
console.log(compareN("jul", "julius2",4));
console.log(compareN("julius2", "jul",4));
// 1