type Link<T> = {
	data: T,
	next: Link<T> | null
}
type CallbackFn<T, R> = (elem: Link<T>, index: number) => R
type MapFn = <T, R> (list: Link<T> | null, cb: CallbackFn<T, R>) => Array<R>

export const map : MapFn =  <T, R> (list: Link<T> | null, cb: CallbackFn<T, R>) :   Array<R> => {
	let lastList :Link<T>|null = list;
	let idx : number = 0;
	let result : Array<R> = [];
	if(lastList != null)
    {
		
		if(lastList.next==null)
		result[idx]=cb(lastList,idx);
		else
		{
			while(lastList.next != null)
			{
				result[idx]=cb(lastList,idx);
				lastList = lastList.next;
				idx++;
			}
			result[idx]=cb(lastList,idx);
		}
    }
	return result;
}