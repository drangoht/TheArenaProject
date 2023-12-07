import { printTree } from './printtree';
import { insertBalanced } from './index';
import { getBalanceFactor } from "./getbalancefactor";

type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}
let root  : BNode = {left:null,right:null,value:6};
root=insertBalanced(root,5);
root=insertBalanced(root,4);
root=insertBalanced(root,3);
root=insertBalanced(root,2);
printTree(root);