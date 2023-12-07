type DiffFn = (arrA: number[], arrB: number[]) => number[]

export const diff  : DiffFn  = (arrA: number[], arrB: number[]) : number[]  => {
    let cptA : number = 0;
    let cptB : number = 0;
    let cptResult : number = 0;
    let foundInB : boolean = false;
    let arrResult : number[] = [];

    while(arrA[cptA] != undefined)
    {
        cptB=0;
        foundInB=false;
        while(arrB[cptB] != undefined)
        {
            if(arrA[cptA] === arrB[cptB])
                foundInB=true;
            cptB++;
        }
        if(!foundInB)
        {
            arrResult[cptResult] = arrA[cptA];
            cptResult++;
        }
        cptA++;
    }
    return arrResult;
};