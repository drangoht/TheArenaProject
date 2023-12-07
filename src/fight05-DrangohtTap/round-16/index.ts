import {push} from './push'
import {insertAt} from './insertat'
import {count} from './count'
type Link<T> = {
	data: T,
	next: Link<T> | null
}
type UltimergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T>|null

export const ultimerge : UltimergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) : Link<T> | null => {
	let resultList :Link<T>|null = null;
	let cptA : number = 0;
	let cptOrigA : number = 0;
	
	if(listA === null)
	{
		return listB;
	}
	if(listB === null)
	{
		return listA;
	}
	// On gère le cas un seul élement dans A alors on push seulement
	cptOrigA = count(listA)==1?0:count(listA);

	while(listB)
	{
		if(listB != null)
		{
			// console.log("a",listA);
			// console.log("b",listB);
			// console.log("c",cptA,cptOrigA);
			if(cptA>=cptOrigA)
				push(listA,listB.data);
			else
			{
				insertAt(listA,cptA+1,listB.data);
			}
			cptA++;
			listB = listB.next;
			
		}
		cptA++;
	}
	return listA;
}