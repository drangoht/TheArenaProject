import {merge} from "./index";
import {find} from "./find"
import {map} from "./map"
import { createLink} from "./createLink";
import { push } from "./push"
import { unshift } from "./unshift";
import { printLinkedList } from "./printlinkedlist";
import { addAfter } from "./addafter";
type Link<T> = {
	data: T,
	next: Link<T> | null
}

let link = createLink(1)
let link2 = addAfter(link,2);
let link3 = addAfter(link2,3);
let linkA = createLink(4);
let linkB = addAfter(linkA,5);
let linkC = addAfter(linkB,6);
// printLinkedList(link3);
// console.log(deleteAt(link3,5));
let listresult = merge(link,linkA);
printLinkedList(link);
printLinkedList(linkA);
printLinkedList(listresult);