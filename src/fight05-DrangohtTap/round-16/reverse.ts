type Link<T> = {
	data: T,
	next: Link<T> | null
}
type ReverseFn = <T> (list: Link<T> | null) => Link<T> | null

export const reverse : ReverseFn = <T> (list: Link<T> | null)  : Link<T> | null => {
	let currList : Link<T> | null = list;
	let reverseList : Link<T> | null = null;
	let old : Link<T> | null = null;
	if(currList != null)
	{
		while(currList) {
			// on stocke le pointeur
			old = currList.next;
			// on met à jour le pointeur avec le précédent
			currList.next = reverseList;
			// on stock le courant
			reverseList = currList;
			// le courant devient le pointeur suivant
			currList = old;
		  }
		  return reverseList;
		
	}
	
	return null;
}