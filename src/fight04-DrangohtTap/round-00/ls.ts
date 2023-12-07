import * as fs from 'fs';
import * as path from 'path';
/*
    fs.readdirSync
    fs.statSync
    process.exit
    fs.writeSync
    Stats.isFile
    Stats.isDirectory
    Array.sort
    Array.length
    String.padEnd
    String.localeCompare
    path.join
*/
//  const compareForSort = (fileNameA : string, fileNameB : string) : number => {
//     return fileNameA.localeCompare(fileNameB);
//  }
const getTotalLikeLs = (strPath:string, files: fs.Dirent[]) : number => {
    let cptFile : number = 0;
    let total : number = 0;
    while(cptFile < files.length)
    {
        if(!files[cptFile].isSymbolicLink() && (files[cptFile].isDirectory() || files[cptFile].isFile() ))
        {

            total = total + fs.statSync(path.join(strPath,files[cptFile].name)).blocks;
        }
        cptFile++;
    }
    return total;
}
const ls = (curPath : string)  => {
    let cptFile : number = 0;
    let fileType : string = "File";
    let displayFile : boolean = true;
    let total : number = 0;
    let lines : string[] = [];
    try 
    {
        let results = fs.readdirSync(curPath,{encoding: "utf8",withFileTypes:true});
        results.sort();
        if(results.length > 0) 
        {
            total = getTotalLikeLs(curPath,results);
            fs.writeSync(1,"total " + total +"\n");
            while(cptFile < results.length)
            {
                displayFile=false;

                if(!results[cptFile].isSymbolicLink() && results[cptFile].isDirectory())
                {
                    fileType="Directory".padEnd(9);
                    displayFile=true;
                }
                if(!results[cptFile].isSymbolicLink() && results[cptFile].isFile())
                {
                    fileType="File".padEnd(9);
                    displayFile=true;
                }   
                if(displayFile) 
                    fs.writeSync(1,fileType + "  " + results[cptFile].name +"\n");
                
                
                cptFile++;
            }
        }
    }
    catch (err) 
    {
        curPath=curPath==undefined?"":curPath;
        fs.writeSync(2,"\"" + curPath+ "\" is not a valid directory\n");
        process.exit(1);
    }
}
var curPath = process.argv[2];

ls(curPath);