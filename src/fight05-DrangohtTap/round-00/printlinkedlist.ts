type Link<T> = {
	data: T,
	next: Link<T> | null
}

export const printLinkedList = <T> (link : Link<T> ) : void => {
    do {
        console.log (link.data + "=>");
    } while(link.next != null);
}