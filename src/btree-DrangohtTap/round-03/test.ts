import { getHeight } from './getheight';
import {search} from './search'
import {insert} from './insert'
import { printTree } from './printtree';
import { getBalanceFactor } from '.';
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

let root = insert(null,-42);
// root = insert(root,2);
// root = insert(root,3);
// root = insert(root,4);
// root = insert(root,6);
// root = insert(root,5);
//printTree(root);
console.log(getBalanceFactor(root));
