import { rotateLeftRight } from './index';
import { rotateRightLeft } from './rotaterightleft';
import { rotateLeft } from './rotateleft';
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
let l3  : BNode = {left:null,right:null,value:2};
let l2  : BNode = {left:null,right:l3,value:1};
let root : BNode = {left:l2,right:null,value:3};
// let root = insert(null,3);
// root = insert(root,1);
// root = insert(root,2);
// root = insert(root,2);
// root = insert(root,5);
// root = insert(root,4);
// root = insert(root,6);
// root = insert(root,5);
//printTree(root,"");
console.log(root);
//console.log(root);
root = rotateLeftRight(root);
console.log(root);
//printTree(root,"");
// console.log("");
// root = rotateLeft(root);
// printTree(root,"");
// console.log("");
// root = rotateLeft(root);
// //console.log(root);
// printTree(root,0);
