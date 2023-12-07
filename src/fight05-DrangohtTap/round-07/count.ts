type Link<T> = {
	data: T,
	next: Link<T> | null
}

type CountFn = <T> (list: Link<T>|null) => number

export const count : CountFn =  <T> (list: Link<T>|null) : number => {
	let countResult : number = 0;
	if(list != null)
    {
        let listnext = list
		countResult++;
        while(listnext.next != null)
        {
            countResult++;
			listnext = listnext.next!;
        }
    }
	return countResult;
}