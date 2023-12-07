type Link<T> = {
	data: T,
	next: Link<T> | null
}
type InsertAtFn = <T> (list: Link<T> | null, index: number, data: T) => Link<T> | undefined

export const insertAt : InsertAtFn =  <T> (list: Link<T> | null, index: number, data: T):   Link<T> | undefined => {
	let lastList :Link<T>|null = list;
	let prevList :Link<T>|null = list;
	let newLink : Link<T>|null = {data:data,next:null}
	let cptIndex : number = 0;
	if(lastList != null)
    {
		if((index==0) && (lastList.next==null))
		{
			newLink.next = lastList;
			return newLink;
		}
        while(lastList.next != null)
        {
			if(index==cptIndex)
			{
				if(index>0)
				{
					newLink.next=prevList!.next;
					prevList!.next =newLink;
				}
				else
					newLink.next=lastList;
				return newLink;
			}
			prevList = lastList;
			lastList = lastList.next!;
			cptIndex ++;
        }
		if(index==cptIndex)
		{
			newLink.next=lastList;
			prevList!.next =newLink;
			return newLink;
		}

		
    }
	else
	{
		if(index==0)
			return newLink;
	}
	return undefined;
}