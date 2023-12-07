import { rotateRight } from "./rotateright";
import { rotateLeft } from "./rotateleft";
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type RotateFn = (root: BNode) => BNode

export const rotateLeftRight : RotateFn = (root: BNode ) : BNode => {
    //if(root.right != null) {
        root.left = rotateLeft(root.left!);
        root = rotateRight(root);
    //}
    return root;
}