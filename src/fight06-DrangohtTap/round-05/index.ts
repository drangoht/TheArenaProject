type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type RotateFn = (root: BNode) => BNode

export const rotateLeft : RotateFn = (root: BNode ) : BNode => {

    let oldRoot : BNode|null = root;
    if (root.left != null)   
        root = root.left;     
    oldRoot.left = root.right;
    root.right = oldRoot;      
    return root;
}