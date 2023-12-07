import  {getHeight} from "./getheight";
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type GetBalanceFn = (root: BNode | null) => number

export const getBalanceFactor : GetBalanceFn = (root: BNode | null) : number => {
    let result : number =0;
    let resultL : number =0;
    let resultR : number =0;
    if(!root)
        result= 0;
    else
    {
        result =  getHeight(root.left) - getHeight(root.right);
    }
    return result;
}