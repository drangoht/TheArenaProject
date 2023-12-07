type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type RotateFn = (root: BNode) => BNode

export const rotateLeft : RotateFn = (root: BNode ) : BNode => {
	let pivot = root.right;
    root.right = pivot!.left;
    pivot!.left =  root ;
    root = pivot!;
    return root;

}