"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var FILE_BUFFER_SIZE = 128000;
// path.basename, fs.openSync, fs.writeSync, fs.readSync, fs.closeSync, Buffer.alloc, Buffer.copy, fs.statSync, Stats.isFile, Stats.isDirectory
var cp = function (sourcePath, destinationPath) {
    if ((sourcePath === undefined) || (destinationPath === undefined))
        process.exit(1);
    try {
        var fdSource = fs.openSync(sourcePath, 'r');
        // si dossier on ajoute le nom du fichier source à la fin
        try {
            var statFile = fs.statSync(destinationPath, { throwIfNoEntry: undefined });
            if ((statFile != undefined) && (fs.statSync(destinationPath).isDirectory()))
                destinationPath = destinationPath + "/" + path.basename(sourcePath);
        }
        catch (err) {
        }
        var fdDest = fs.openSync(destinationPath, 'w');
        var buffer = Buffer.alloc(FILE_BUFFER_SIZE, 'utf-8');
        var bufferDest = Buffer.alloc(FILE_BUFFER_SIZE, 'utf-8');
        var bufferSize = FILE_BUFFER_SIZE;
        while (bufferSize == FILE_BUFFER_SIZE) {
            bufferSize = fs.readSync(fdSource, buffer, 0, FILE_BUFFER_SIZE, null);
            bufferDest = Buffer.alloc(bufferSize, 'utf-8');
            buffer.copy(bufferDest, 0, 0, bufferSize);
            fs.writeSync(fdDest, bufferDest);
        }
        fs.closeSync(fdSource);
        fs.closeSync(fdDest);
    }
    catch (err) {
        process.exit(1);
    }
};
cp(process.argv[2], process.argv[3]);
