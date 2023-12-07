
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type RotateFn = (root: BNode) => BNode

export const rotateRight : RotateFn = (root: BNode ) : BNode => {    
    let pivot = root.left;
    root.left = pivot!.right;
    pivot!.right =  root ;
    //root = pivot!;
    return pivot!;
}