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
 const compareForSort = (fileA : fs.Dirent, fileB : fs.Dirent) : number => {
    return fileA.name.localeCompare(fileB.name);
 }
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
const displayFolderContent = (parentPath : string,isRoot: boolean) :void => {
    let cptFile : number = 0;
    let fileType : string = "File";
    let displayFile : boolean = true;
    let subDirectories : string[] = [];
    let cptSubdir : number = 0;
    let total : number = 0;
    try 
    {
        let results = fs.readdirSync(parentPath,{encoding: "utf8",withFileTypes:true});
        results.sort(compareForSort);
        total = getTotalLikeLs(parentPath,results);
        if((results.length > 0) || (isRoot===false))
        {
            fs.writeSync(1,parentPath +":\n");
            
            fs.writeSync(1,"total " + total +"\n");
            while(cptFile < results.length)
            {
                displayFile=false;
                if(!results[cptFile].isSymbolicLink() && results[cptFile].isDirectory())
                {
                    fileType="Directory".padEnd(11);
                    subDirectories[cptSubdir] = path.join(parentPath,(parentPath===".")||(parentPath==="..")?"":"/",results[cptFile].name);
                    cptSubdir++;
                    displayFile=true;
                }
                if(!results[cptFile].isSymbolicLink() && results[cptFile].isFile())
                {
                    fileType="File".padEnd(11);
                    displayFile=true;
                }   
                if(displayFile) 
                    fs.writeSync(1,fileType  + results[cptFile].name +"\n");
                
                
                cptFile++;
            }
            cptFile = 0;
            while(cptFile < subDirectories.length)
            {
                fs.writeSync(1,"\n");
                displayFolderContent(subDirectories[cptFile],false);
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
const lsdeep = (curPath : string)  => {
    displayFolderContent(curPath,true);
}
var curPath = process.argv[2];

lsdeep(curPath);