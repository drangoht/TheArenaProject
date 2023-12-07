type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type PrintTreeFn =  (root: BNode | null) => void;
export const printTree : PrintTreeFn = (root: BNode | null) : void => {
    printTreeStep(root,0);
}

const printTreeStep = (root: BNode | null,level : number) : void => {
    let cpt : number = 0;
    let line : string = "";
    
    if(root){
        if(level>0)
        {
            while(cpt < level-1)
            {
                line += "|   ";
                cpt++;
            }
            line+="|___";
            if(level>1)
            {

            }
        }
        process.stdout.write(line + root.value + "\n");
        
        printTreeStep(root.right!,level+1);
        printTreeStep(root.left!,level+1);
    }

}