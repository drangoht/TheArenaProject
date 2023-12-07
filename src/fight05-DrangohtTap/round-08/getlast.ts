type Link<T> = {
	data: T,
	next: Link<T> | null
}

type GetLastFn = <T> (list: Link<T>|null) => Link<T>|null

export const getLast : GetLastFn =  <T> (list: Link<T>|null) :  Link<T>|null => {
	let lastList :Link<T>|null = list;
	if(lastList != null)
    {
        while(lastList.next != null)
        {
			lastList = lastList.next!;
        }
    }
	return lastList;
}