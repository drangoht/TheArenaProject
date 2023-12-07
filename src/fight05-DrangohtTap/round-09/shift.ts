type Link<T> = {
	data: T,
	next: Link<T> | null
}
type ShiftFn = <T> (list: Link<T> | null) => Link<T> | undefined

export const shift : ShiftFn =  <T> (list: Link<T> | null) :   Link<T> | undefined => {
	let newLink :Link<T> | undefined = undefined; 
	if(list != null)
	{
		if(list.next != null)
		{
			newLink = list.next;
			list.next = null;
		}

	}
	return newLink;
}