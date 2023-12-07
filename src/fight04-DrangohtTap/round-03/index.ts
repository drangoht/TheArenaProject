import * as fs from 'fs';
const FILE_BUFFER_SIZE = 1024;
type WriteFileSyncFn = (path: string, buffer: Buffer) => number
// fs.openSync, fs.writeSync, fs.closeSync
export const writeFileSync : WriteFileSyncFn = (path: string, buffer: Buffer): number => {
    let fd : number = fs.openSync(path, 'w');
    let nbWriteBytes : number = 0;
    nbWriteBytes=  fs.writeSync(fd, buffer);
    fs.closeSync(fd);
    return nbWriteBytes ;
}