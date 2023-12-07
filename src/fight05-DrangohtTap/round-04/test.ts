import { getLast } from "./index"
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
printLinkedList(link3);
let lastLink = getLast(link3);
printLinkedList(lastLink);