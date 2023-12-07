type Link<T> = {
	data: T,
	next: Link<T> | null
}

type PopFn = <T> (list: Link<T> | null) => Link<T> | undefined

export const pop : PopFn =  <T> (list: Link<T>|null) :  Link<T>|undefined => {
	let lastList :Link<T>|undefined = undefined;
	if(list != null)
    {
		lastList=list;
		let prevList : Link<T> = lastList;
        while(lastList.next != null)
        {
			prevList=lastList;
			lastList = lastList.next!;
        }
		prevList.next = null;
    }
	return lastList;
}