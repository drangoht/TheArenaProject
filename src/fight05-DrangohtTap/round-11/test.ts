import { forEach } from './index';
import {pop} from './pop';
import {insertAt} from "./insertat"
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

let link = createLink(3)
let link2 = unshift(link,2);
let link3 = unshift(link2,1);
let link4 = addAfter(link,4);
let link5 = addAfter(link4,5);
let link6 = push(link5,6);
// printLinkedList(link3);
// console.log(deleteAt(link3,5));
forEach(link3,(link, idx) => console.log(idx,link.data * 2));