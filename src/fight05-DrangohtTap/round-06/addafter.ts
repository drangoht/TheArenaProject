type Link<T> = {
	data: T,
	next: Link<T> | null
}

type AddAfterFn = <T> (link: Link<T>|null, data: T) => Link<T>

export const addAfter : AddAfterFn = <T> (begin: Link<T>|null, data: T) : Link<T> => {
	let next: Link<T> | null = null;
	let newLink: Link<T> | null = {data,next};
	if(begin != null)
	{
		if (begin!.next != null)
			newLink.next = begin!.next;
		begin!.next = newLink
	}
	return newLink;
}