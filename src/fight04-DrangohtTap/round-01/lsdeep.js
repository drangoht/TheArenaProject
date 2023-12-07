"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
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
var compareForSort = function (fileA, fileB) {
    return fileA.name.localeCompare(fileB.name);
};
var getTotalLikeLs = function (strPath, files) {
    var cptFile = 0;
    var total = 0;
    while (cptFile < files.length) {
        if (!files[cptFile].isSymbolicLink() && (files[cptFile].isDirectory() || files[cptFile].isFile())) {
            total = total + fs.statSync(path.join(strPath, files[cptFile].name)).blocks;
        }
        cptFile++;
    }
    return total;
};
var displayFolderContent = function (parentPath, isRoot) {
    var cptFile = 0;
    var fileType = "File";
    var displayFile = true;
    var subDirectories = [];
    var cptSubdir = 0;
    var total = 0;
    var fullPath = "";
    try {
        var results = fs.readdirSync(parentPath, { encoding: "utf8", withFileTypes: true });
        results.sort(compareForSort);
        total = getTotalLikeLs(parentPath, results);
        if ((results.length > 0) || (isRoot === false)) {
            //fs.writeSync(1,(parentPath[0]!=".")?"./":"");
            fs.writeSync(1, parentPath + ":\n");
            fs.writeSync(1, "total " + total + "\n");
            while (cptFile < results.length) {
                displayFile = false;
                if (!results[cptFile].isSymbolicLink() && results[cptFile].isDirectory()) {
                    fileType = "Directory".padEnd(9);
                    subDirectories[cptSubdir] = path.join(parentPath, (parentPath === ".") || (parentPath === "..") ? "" : "/", results[cptFile].name);
                    cptSubdir++;
                    displayFile = true;
                }
                if (!results[cptFile].isSymbolicLink() && results[cptFile].isFile()) {
                    fileType = "File".padEnd(9);
                    displayFile = true;
                }
                if (displayFile)
                    fs.writeSync(1, fileType + "  " + results[cptFile].name + "\n");
                cptFile++;
            }
            cptFile = 0;
            while (cptFile < subDirectories.length) {
                fs.writeSync(1, "\n");
                // if(parentPath[0]===".")
                //     subDirectories[cptFile] = "./" + subDirectories[cptFile]
                // if(parentPath[1]===".")
                //     subDirectories[cptFile] = "../" + subDirectories[cptFile]
                displayFolderContent(subDirectories[cptFile], false);
                cptFile++;
            }
        }
    }
    catch (err) {
        curPath = curPath == undefined ? "" : curPath;
        fs.writeSync(2, "\"" + curPath + "\" is not a valid directory\n");
        process.exit(1);
    }
};
var lsdeep = function (curPath) {
    displayFolderContent(curPath, true);
};
var curPath = process.argv[2];
lsdeep(curPath);
