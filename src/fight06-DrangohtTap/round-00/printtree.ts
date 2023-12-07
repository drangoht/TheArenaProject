type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type PrintTreeFn =  (root: BNode | null) => void;
export const printTree : PrintTreeFn = (root: BNode | null) : void => {
    if(!root)
        return;
    printTree(root.left);
    console.log(root.value);
    printTree(root.right);
}