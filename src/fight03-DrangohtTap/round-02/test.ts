import  { itobin} from "./index";

console.log(itobin(-123)) ; // '10110'
console.log(itobin(22)) ; // '10110'
console.log(itobin(0)) ; // '0'
console.log(itobin(-0));// '-0'
console.log(itobin(-10)); // '-1010'