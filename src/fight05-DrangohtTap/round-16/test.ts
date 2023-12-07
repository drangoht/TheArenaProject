import  {ultimerge} from "./index";
import { reverse } from "./reverse";
import {merge} from "./merge";
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
let link2 = addAfter(link,1);
let link3 = addAfter(link2,1);
let linkA = createLink(2);
let linkB = addAfter(linkA,2);
let linkC = addAfter(linkB,2);

let listresult = ultimerge(link,linkA);
printLinkedList(listresult);

link = createLink(1)
linkA = createLink(2);
linkB = addAfter(linkA,2);
linkC = addAfter(linkB,2);

listresult = ultimerge(link,linkA);
printLinkedList(listresult);

link = createLink(1)
linkA = createLink(2);
linkB = addAfter(linkA,2);
linkC = addAfter(linkB,2);

listresult = ultimerge(linkA,link);
printLinkedList(listresult);

linkA = createLink(1);
linkB = addAfter(linkA,2);
linkC = addAfter(linkB,3);

listresult = ultimerge(null,linkA);
printLinkedList(listresult);

listresult = ultimerge(linkA,null);
printLinkedList(listresult);


link = createLink(1)
linkA = createLink(2);
linkB = addAfter(link,1);
linkC = addAfter(linkA,2);

listresult = ultimerge(link,linkA);
printLinkedList(listresult);