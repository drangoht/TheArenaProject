type Link<T> = {
	data: T,
	next: Link<T> | null
}

export const printLinkedList = <T> (list : Link<T> | null) : void => {
    if(list != null)
    {
        let listnext = list
        process.stdout.write(""+listnext.data);
        while(listnext.next != null)
        {
            listnext = listnext.next!;
            process.stdout.write (" => " + listnext.data);
        }
        process.stdout.write ("\n");
    }
}