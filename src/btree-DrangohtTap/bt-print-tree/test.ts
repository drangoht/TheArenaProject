import { printTree } from './index';
import { insertBalanced } from './insertbalanced';

type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}
let root  : BNode = {left:null,right:null,value:1};
root=insertBalanced(root,2);
root=insertBalanced(root,3);
root=insertBalanced(root,4);
root=insertBalanced(root,5);
root=insertBalanced(root,6);
root=insertBalanced(root,7);
root=insertBalanced(root,9);
root=insertBalanced(root,10);
printTree(root);

