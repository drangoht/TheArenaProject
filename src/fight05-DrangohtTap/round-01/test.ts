
import { createLink} from "./createLink";
import { unshift } from "./index";
import { printLinkedList } from "./printlinkedlist";

type Link<T> = {
	data: T,
	next: Link<T> | null
}

let link = createLink(123)
let link2 = unshift(link,456);
let link3 = unshift(link2,789);
printLinkedList(link3);