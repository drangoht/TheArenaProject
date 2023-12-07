import { deleteAt } from "./index";
import {getAt} from "./getat"
import { push } from "./push"
import { getLast } from "./getlast"
import { count} from "./count";
import { createLink} from "./createLink";
import { unshift } from "./unshift";
import { printLinkedList } from "./printlinkedlist";
import { addAfter } from "./addafter";
type Link<T> = {
	data: T,
	next: Link<T> | null
}

let link = createLink(123)
let link2 = unshift(link,456);
let link3 = unshift(link2,789);
let link4 = addAfter(link,999);
let link5 = addAfter(link4,1111);
let link6 = push(link5,8888);
// printLinkedList(link3);
// console.log(deleteAt(link3,5));
printLinkedList(link3);
console.log(deleteAt(link5,0));
printLinkedList(link3);
console.log(deleteAt(link3,0));
printLinkedList(link3);
console.log(deleteAt(link3,2));
printLinkedList(link2);
//printLinkedList(foundLink);