import {find} from "./index"
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

let link = createLink(3)
let link2 = unshift(link,2);
let link3 = unshift(link2,1);
let link4 = addAfter(link,4);
let link5 = addAfter(link4,5);
let link6 = push(link5,6);
// printLinkedList(link3);
// console.log(deleteAt(link3,5));
let listFound = find(link3,link => (link.data < 1));
console.log(listFound);