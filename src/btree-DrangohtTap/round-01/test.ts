import {search} from './index'
import {insert} from './insert'
import { printTree } from './printtree';
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

let root = insert(null,-42);
root = insert(root,2);
root = insert(root,3);
root = insert(root,4);
root = insert(root,6);
root = insert(root,5);
//printTree(root);
console.log(search(root,3))
console.log(search(root,-42))
console.log(search(root,50))