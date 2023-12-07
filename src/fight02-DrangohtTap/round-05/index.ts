type Coordinate = [number, number]
type Matrix = number[][]
type FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix) => number
type MoveFn = (coord: Coordinate, end: Coordinate, matrix:Matrix,nbMoves : number,visited : Coordinate[],dir : number) => number;
type FindVisitedCoordFn = (visited : Coordinate[], coord:Coordinate ) => boolean;

const DIRECTIONS : Coordinate[] = [[0,-1],[-1,0],[0,1],[1,0]];

const IsOutside = (coord : Coordinate, matrix:Matrix) : boolean =>
{
    return (coord[1] <0) || (coord[1] >= matrix[0].length) || (coord[0]< 0) || (coord[0] >= matrix.length);
}
const findVisitedCoord : FindVisitedCoordFn = (visited : Coordinate[], coord:Coordinate) : boolean => {
    let cpt : number = 0;
    while(visited[cpt] != undefined)
    {
        if(visited[cpt][0] == coord[0] && visited[cpt][1] == coord[1])
            return true;
        cpt++;
    }
    return false;
}
const move : MoveFn = (coord: Coordinate, end: Coordinate, matrix:Matrix,nbMoves : number,visited : Coordinate[],dir:number) : number => {
    
    let curCoord : Coordinate = [coord[0],coord[1]];
    dir=dir>DIRECTIONS.length-1?0:dir;
    curCoord[0] += DIRECTIONS[dir][0]
    curCoord[1] += DIRECTIONS[dir][1]
    if(!IsOutside(curCoord,matrix) && !findVisitedCoord(visited,curCoord) && (matrix[curCoord[0]][curCoord[1]] === 1)  )
    {
        // on reinit ce chemin pour ne plus l'utiliser
        visited.push([curCoord[0],curCoord[1]]);
        // arrivée ?
        if(curCoord[0] == end[0] && curCoord[1]==end[1])
            return nbMoves+1;
        else
            return move(curCoord,end,matrix,nbMoves+1,visited,dir);
    }
    return move(coord,end,matrix,nbMoves,visited,dir+1);
}



export const findPath  : FindPathFn  = (begin: Coordinate, end: Coordinate, matrix: Matrix): number  => {

    let visited : Coordinate[] = []
    let invertedBegin : Coordinate = [begin[1],begin[0]];
    let invertedEnd : Coordinate = [end[1],end[0]];
    if(begin[0] === end[0] && begin[1] === end[1])
        return 1;
    
    visited.push([invertedBegin[0],invertedBegin[1]]);
    // chemin de recherche gauche, haut, droite, bas
    return move(invertedBegin,invertedEnd,matrix,1,visited,0);

}