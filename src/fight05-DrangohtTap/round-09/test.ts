import {insertAt} from "./index"
import {shift} from "./shift"
import { deleteAt } from "./deleteat";
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
let linkstart = insertAt(link3,0,0);
printLinkedList(linkstart);
console.log(insertAt(link3,5,666));
printLinkedList(link3);
console.log(insertAt(link3,2,222));
printLinkedList(link3);
console.log(insertAt(null,2,111));
printLinkedList(link3);
console.log(insertAt(null,0,444));
printLinkedList(link3);
console.log(insertAt(link3,20,222));
printLinkedList(link3);
