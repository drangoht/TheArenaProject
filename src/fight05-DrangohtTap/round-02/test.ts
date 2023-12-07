
import { createLink} from "./createLink";
import { unshift } from "./unshift";
import { printLinkedList } from "./printlinkedlist";
import { addAfter } from "./index";
type Link<T> = {
	data: T,
	next: Link<T> | null
}

let link = createLink(123)
let link2 = unshift(link,456);
let link3 = unshift(link2,789);
let link4 = addAfter(null,999);
printLinkedList(link4);