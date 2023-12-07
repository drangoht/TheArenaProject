type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type SearchFn = (root: BNode | null, value: number) => BNode | undefined

export const search : SearchFn = (root: BNode | null, value: number) : BNode | undefined => {
    if(!root)
        return undefined;
        
    if(value < root.value)
        return search(root.left, value);

    if(value > root.value)
        return search(root.right, value);

    if(value == root.value)
        return root;

    return undefined;
}