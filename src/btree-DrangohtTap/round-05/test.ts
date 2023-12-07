import { rotateLeft } from './index';
import { getHeight } from './getheight';
import {search} from './search'
import {insert} from './insert'
import { printTree } from './printtree';
import { getBalanceFactor } from './getbalancefactor';
import { rotateRight } from './rotateright';
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

let root = insert(null,3);
root = insert(root,2);
root = insert(root,1);
// root = insert(root,2);
// root = insert(root,5);
// root = insert(root,4);
// root = insert(root,6);
// root = insert(root,5);
printTree(root,0);
//console.log(root);
root = rotateLeft(root)
//console.log(root);
printTree(root,0);
