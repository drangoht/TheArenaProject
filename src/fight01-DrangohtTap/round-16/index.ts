type IsAlphaFn = (str: string) => boolean

export const isAlpha  : IsAlphaFn  = (str: string) : boolean  => {
    let cpt : number =0;
    let cptAlpha : number = 0;
    let isAlpha : boolean = false;
    let strAlphaCheck : string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    while(str[cpt] != undefined)
    {
        cptAlpha=0;
        isAlpha=false;
        while(strAlphaCheck[cptAlpha] != undefined)
        {
            console.log(str[cpt],strAlphaCheck[cptAlpha]);
            if(str[cpt] === strAlphaCheck[cptAlpha])
                isAlpha = true;
            cptAlpha++;
        }
        if(!isAlpha)
            return false;
        cpt++;
    }
    return true;
};