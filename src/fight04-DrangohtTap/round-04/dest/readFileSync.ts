import * as fs from 'fs';
const FILE_BUFFER_SIZE = 1024;
type ReadFileSyncFn = (path: string) => string
export const readFileSync : ReadFileSyncFn = (path: string) : string => {
    let fd : number = fs.openSync(path, 'r');
    let buffer = Buffer.alloc(FILE_BUFFER_SIZE);
    let bufferDest = Buffer.alloc(FILE_BUFFER_SIZE);
    let bufferSize : number =FILE_BUFFER_SIZE;
    let result : string = '';
    while(bufferSize == FILE_BUFFER_SIZE)
    {
        bufferSize= fs.readSync(fd,buffer,0,FILE_BUFFER_SIZE,null);
        bufferDest = Buffer.alloc(bufferSize);
        buffer.copy(bufferDest,0,0,bufferSize);
        result += bufferDest.toString();
    }
    fs.closeSync(fd);
    return result ;
}