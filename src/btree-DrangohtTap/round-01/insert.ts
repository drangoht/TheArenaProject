type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type InsertFn = (root: BNode | null, value: number) => BNode;

export const insert : InsertFn = (root: BNode | null, value: number) : BNode => {
    let newNode : BNode = {left:null,right:null,value:value};
    if(!root)
    {
        root=newNode;
        return root;
    }
    if(value < root.value)
    {
        if(!root.left)
            root.left=newNode;
        else
            insert(root.left, value);
    }
    if(value > root.value)
    {
        if(!root.right)
            root.right=newNode;
        else
            insert(root.right, value);
    }
    return root;
}