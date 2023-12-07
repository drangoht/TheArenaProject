type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type GetHeightFn = (root: BNode | null) => number
const max = ( a : number , b :number ) : number => {
    if(a>b) return a;
    else return b;
}

export const getHeight : GetHeightFn = (root: BNode | null) : number => {
    if(!root)
        return -1;
    return 1 + max(getHeight(root.left),getHeight(root.right));
}