type Link<T> = {
	data: T,
	next: Link<T> | null
}
type CallbackFn<T> = (elem: Link<T>) => boolean
type FindFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) => Link<T> | undefined

export const find : FindFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) : Link<T> | undefined => {
	let lastList :Link<T>|null = list;
	if(lastList != null)
    {
		while(lastList.next != null)
		{
			if(cb(lastList))
				return lastList;
			lastList = lastList.next;
		}
		if(cb(lastList))
				return lastList;
    }
	return undefined;
}