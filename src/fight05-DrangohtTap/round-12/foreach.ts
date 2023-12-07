type Link<T> = {
	data: T,
	next: Link<T> | null
}
type CallbackFn<T> = (elem: Link<T>, index: number) => void

type ForEachFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) => void

export const forEach : ForEachFn =  <T> (list: Link<T> | null, cb: CallbackFn<T>) :  void => {
	let lastList :Link<T>|null = list;
	let idx : number = 0;
	if(lastList != null)
    {
		
		if(lastList.next==null)
			cb(lastList,idx);
		else
		{
			while(lastList.next != null)
			{
				cb(lastList,idx);
				lastList = lastList.next;
				idx++;
			}
			cb(lastList,idx);
		}
    }
}