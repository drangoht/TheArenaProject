type Link<T> = {
	data: T,
	next: Link<T> | null
}
type GetAtFn = <T> (list: Link<T> | null, index: number) => Link<T>| undefined

export const getAt : GetAtFn =  <T> (list: Link<T> | null, index: number) :   Link<T>| undefined => {
	let lastList :Link<T>|null = list;
	let cptIndex : number = 0;
	if(lastList != null)
    {
		
        while(lastList.next != null)
        {
			if(index==cptIndex)
				return lastList;
			lastList = lastList.next!;
			cptIndex ++;
        }
		if(index==cptIndex)
			return lastList;
		
    }
	return undefined;
}