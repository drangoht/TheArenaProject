type Link<T> = {
	data: T,
	next: Link<T> | null
}
type DeleteAtFn = <T> (list: Link<T> | null, index: number) => Link<T>|undefined

export const deleteAt : DeleteAtFn =  <T> (list: Link<T> | null, index: number) :   Link<T>| undefined => {
	let lastList :Link<T>|null = list;
	let prevList :Link<T>|null = list;
	let cptIndex : number = 0;
	if(lastList != null)
    {
		if((index==0) && (lastList.next==null))
		{
			return lastList;
		}
        while(lastList.next != null)
        {
			if(index==cptIndex)
			{
				if(index>0)
					prevList!.next =lastList.next;
				else
					lastList.next = null;
				return lastList;
			}
			prevList = lastList;
			lastList = lastList.next!;
			cptIndex ++;
        }
		if(index==cptIndex)
		{
			prevList!.next = null;
			return lastList;
		}

		
    }
	return undefined;
}