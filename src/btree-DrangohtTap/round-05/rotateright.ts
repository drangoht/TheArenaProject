type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type RotateFn = (root: BNode) => BNode

export const rotateRight : RotateFn = (root: BNode ) : BNode => {

    let oldRoot : BNode|null = root;
    if (root.right != null)   
        root = root.right;     
    oldRoot.right = root.left;
    root.left = oldRoot;      
    return root;
}