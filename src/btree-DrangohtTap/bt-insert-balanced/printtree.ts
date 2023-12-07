import { getHeight } from "./getheight"; 
import { getBalanceFactor } from "./getbalancefactor";
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type PrintTreeFn =  (root: BNode | null,level : number) => void;
export const printTree : PrintTreeFn = (root: BNode | null,level : number) : void => {
    let cpt : number = 0;
    if(!root){
        while(cpt < level-2)
        {
            process.stdout.write(' ');
            cpt++;
        }
        process.stdout.write('|');
        process.stdout.write('\n');
        return;
    }
    printTree(root.left,level+1);
    while(cpt < level-1)
    {
        process.stdout.write(' ');
        cpt++;
    }
    process.stdout.write('-');
    process.stdout.write(root.value + " H:" + getHeight(root) + "B:" + getBalanceFactor(root) + "\n");
    
    printTree(root.right,level+1);
}