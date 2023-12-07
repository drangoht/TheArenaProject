type Link<T> = {
	data: T,
	next: Link<T> | null
}

export const printLinkedList = <T> (link : Link<T> ) : void => {
    if(link != null)
    {
        let linknext = link
        process.stdout.write(""+linknext.data);
        while(linknext.next != null)
        {
            linknext = linknext.next!;
            process.stdout.write (" => " + linknext.data);
        }
        process.stdout.write ("\n");
    }
}