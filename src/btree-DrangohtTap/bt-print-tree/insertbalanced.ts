import { rotateRight } from "./rotateright";
import { rotateLeft } from "./rotateleft";
import { insert } from "./insert";
import { getBalanceFactor } from "./getbalancefactor";
import { printTree } from "./printtree";
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type InsertBalancedFn = (root: BNode | null, value: number) => BNode

export const insertBalanced : InsertBalancedFn = (root: BNode | null, value: number) : BNode=> {
    if(!root)
        return {left:null, right:null,value:value};
    insert(root,value);
    root= balanceTree(root);
    return root!;
}

const isBalanced = (root: BNode |null)  : boolean =>  {
    if((getBalanceFactor(root)>1) || (getBalanceFactor(root)<-1))
        return false;
    return true;
}

const balanceTree = (root: BNode |null)  : BNode=>  {
    if(root)
    {
        //console.log(root?.value, getBalanceFactor(root)," L",getBalanceFactor(root!.left)," R",getBalanceFactor(root!.right));  
        if(!isBalanced(root!.left))
            root!.left = balanceTree(root!.left);
        if(!isBalanced(root!.right))
            root!.right = balanceTree(root!.right);
        if(getBalanceFactor(root)>1)
        {
            if(getBalanceFactor(root!.left)<0 && root!.left)
            {
                //console.log("LL", root?.value);
                root.left=rotateLeft(root!.left);
            }
            //console.log("RR", root?.value);
            root=rotateRight(root);
        }
        if(getBalanceFactor(root)<-1)
        {
            if (getBalanceFactor(root!.right)>0 && root!.right)
            {
                //console.log("RR", root?.value);
                root!.right=rotateRight(root!.right);
            }
            //console.log("LL", root?.value);
            root=rotateLeft(root);
        }

        
    }
    
    return root!;
}
