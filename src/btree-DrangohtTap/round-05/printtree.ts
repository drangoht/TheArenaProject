type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type PrintTreeFn =  (root: BNode | null,level:number|0) => void;
export const printTree : PrintTreeFn = (root: BNode | null,level : number |0) : void => {
    let cpt : number = 0;
    if(!root)
        return;
    printTree(root.left,level+1);
    while(cpt<level)
    {
        process.stdout.write("--");
        cpt++;
    }
    process.stdout.write("" + root.value +"\n");
    printTree(root.right,level+1);
}