import { rotateRight } from "./rotateright";
import { rotateLeft } from "./rotateleft";
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type RotateFn = (root: BNode) => BNode

export const rotateRightLeft : RotateFn = (root: BNode ) : BNode => {
    root.right = rotateRight(root.right!);
    root = rotateLeft(root);
    return root;
}