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
//  const compareForSort = (fileNameA : string, fileNameB : string) : number => {
//     return fileNameA.localeCompare(fileNameB);
//  }
var getRecurseTotal = function (strPath) {
    var total = 0;
    var cptFile = 0;
    var results = fs.readdirSync(strPath);
    total = results.length;
    while (cptFile < results.length) {
        if (fs.statSync(path.join(strPath, results[cptFile])).isDirectory()) {
            total += getRecurseTotal(strPath);
        }
        cptFile++;
    }
    return total;
};
var ls = function (curPath) {
    var cptFile = 0;
    var fileType = "File";
    var displayFile = true;
    var total = 0;
    try {
        var results = fs.readdirSync(curPath);
        results.sort();
        if (results.length > 0) {
            total = getRecurseTotal(curPath);
            fs.writeSync(1, "total " + results.length + "\n");
            while (cptFile < results.length) {
                displayFile = false;
                if (fs.statSync(path.join(curPath, results[cptFile])).isDirectory()) {
                    fileType = "Directory".padEnd(9);
                    displayFile = true;
                }
                if (fs.statSync(path.join(curPath, results[cptFile])).isFile()) {
                    fileType = "File".padEnd(9);
                    displayFile = true;
                }
                if (displayFile)
                    fs.writeSync(1, fileType + "  " + results[cptFile] + "\n");
                cptFile++;
            }
            // Ecriture
        }
    }
    catch (err) {
        curPath = curPath == undefined ? "" : curPath;
        fs.writeSync(2, "\"" + curPath + "\" is not a valid directory\n");
        process.exit(1);
    }
};
var curPath = process.argv[2];
ls(curPath);
