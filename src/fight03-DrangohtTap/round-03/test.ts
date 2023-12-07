import  { itohex} from "./index";

console.log(itohex(10));    // 'A'
console.log(itohex(111) );   // '6F'
console.log(itohex(-111) );  // '-6F'
console.log(itohex(255) );   // 'FF'
console.log(itohex(0)  );    // '0'
console.log(itohex(-0)  );   // '-0'