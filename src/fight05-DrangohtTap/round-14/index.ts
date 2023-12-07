type Link<T> = {
	data: T,
	next: Link<T> | null
}
type MergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T> | null

export const merge : MergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) : Link<T> | null => {
	let currList :Link<T>|null = null;
	if(listA != null)
    {
		if(listB != null)
    	{
			currList = listA;
			if(listA.next == null)
			{
				listA.next = listB;
			}
			else
			{
				while(currList.next != null)
				{
					currList = currList.next;
				}
				currList.next = listB;
				return listA;
			}
			
		}
		else
			return listA;
    }
	else
	{
		if(listB != null)
			return listB;
	}
	return null;
}