type Link<T> = {
	data: T,
	next: Link<T> | null
}

type PushFn = <T> (list: Link<T>|null, data: T) => Link<T>

export const push : PushFn =  <T> (list: Link<T>|null, data: T) :   Link<T> => {
	let lastList :Link<T>|null = list;
	let newList : Link<T>|null = {data:data,next:null};
	if(lastList != null)
    {
        while(lastList.next != null)
        {
			lastList = lastList.next!;
        }
		lastList.next = newList;
    }
	return newList;
}