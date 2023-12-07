import { getHeight } from "./getheight"; 
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type PrintTreeFn =  (root: BNode | null, where : string) => void;
export const printTree : PrintTreeFn = (root: BNode | null, where : string) : void => {
    let cpt : number = 0;
    if(!root)
        return;
    
    printTree(root.left,"L" + getHeight(root));
    process.stdout.write(where + ":" + root.value +"\n");
    // while(cpt<level)
    // {
    //     process.stdout.write("--");
    //     cpt++;
    // }
    
    printTree(root.right,"R" + getHeight(root));
}