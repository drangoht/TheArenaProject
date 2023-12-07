type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type GetHeightFn = (root: BNode | null) => number

export const getHeight : GetHeightFn = (root: BNode | null) : number => {
    let result : number =0;
    let resultL : number =0;
    let resultR : number =0;
    if(!root)
        result= -1;
    else
    {
        if(root.left)
            resultL = 1 + getHeight(root.left);
        if(root.right)
            resultR = 1 + getHeight(root.right);
        
        console.log("R",resultR,"L",resultL);
        result = resultL>resultR?resultL : resultR;
    }
    return result;
}