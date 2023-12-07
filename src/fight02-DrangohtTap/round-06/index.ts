import {pop} from './pop';
type Coordinate = [number, number]
type CoordinateWithDirection = [Coordinate,number]
type CoordinateWithValue = [Coordinate,number]
type Matrix = number[][]
type FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix) => number
type MoveFn = (coord: Coordinate, end: Coordinate, matrix:Matrix,nbMoves : number,visited : Coordinate[]) => number;
type FindVisitedCoordFn = (visited : Coordinate[], coord:Coordinate ) => boolean;

const DIRECTIONS : Coordinate[] = [[0,-1],[-1,0],[0,1],[1,0]];

const IsOutside = (coord : Coordinate, matrix:Matrix) : boolean =>
{
    return (coord[1] <0) || (coord[1] >= matrix[0].length) || (coord[0]< 0) || (coord[0] >= matrix.length);
}
const findVisitedCoord : FindVisitedCoordFn = (visited : Coordinate[], coord:Coordinate) : boolean => {
    let cpt : number = 0;
    while(cpt < visited.length) 
    {
        if(visited[cpt][0] == coord[0] && visited[cpt][1] == coord[1])
            return true;
        cpt++;
    }
    return false;
}
const getPossibleMoves = (coord: Coordinate, matrix:Matrix,visited : Coordinate[] )  :Coordinate[] =>
{
    let cptDirection : number=0;
    let possibleMoves : Coordinate[] = []
    let curCoord : Coordinate = [coord[0],coord[1]];
    let newCoord : Coordinate = [coord[0],coord[1]];
    while (cptDirection < DIRECTIONS.length)
    {
        newCoord[0] = curCoord[0] +DIRECTIONS[cptDirection][0];
        newCoord[1] = curCoord[1] +DIRECTIONS[cptDirection][1];
        if(!IsOutside(newCoord,matrix) && !findVisitedCoord(visited,newCoord) && (matrix[newCoord[0]][newCoord[1]] === 1))
        {
            // On stocke les mouvements possibles depuis les coordonnées actuelles
            possibleMoves.push([newCoord[0],newCoord[1]]);
        }
        cptDirection++;
    }
    return possibleMoves;
}
const move : MoveFn = (coord: Coordinate, end: Coordinate, matrix:Matrix,nbMoves : number,visited : Coordinate[]) : number => {
    let arrayQueue : CoordinateWithValue[] = [];
    let currentCase : CoordinateWithValue;
    let cptMoves : number = 0;
    let possibleMoves : Coordinate[]
    arrayQueue.push([[coord[0],coord[1]],matrix[coord[0]][coord[1]]]);
    arrayQueue.push([[0,0],-1]); // pour définir quand on a fini de visiter une case


    while (arrayQueue.length>0 )
    {
        currentCase = [arrayQueue[0][0],arrayQueue[0][1]];
        arrayQueue=pop(arrayQueue);
        
        if (currentCase[1] == -1) // visite finie on incrémente le nombre de pas
        {
            nbMoves++;
            arrayQueue.push([[0,0],-1]);
        }
        else
        {
            if (currentCase[0][0]  == end[0] && currentCase[0][1]  == end[1]) // on est arrivé !
                return nbMoves;
            visited.push([currentCase[0][0],currentCase[0][1]]); // déjà visité

            cptMoves = 0;
            possibleMoves = getPossibleMoves(currentCase[0],matrix,visited); // on jette un oeil dans toutes les directions
            while(cptMoves < possibleMoves.length)
            {
                arrayQueue.push( [[possibleMoves[cptMoves][0],possibleMoves[cptMoves][1]],1]);
                cptMoves++;
            }
        }

    }
    return nbMoves;
}



export const shortestPath  : FindPathFn  = (begin: Coordinate, end: Coordinate, matrix: Matrix): number  => {

    let visited : Coordinate[] = []
    let invertedBegin : Coordinate = [begin[1],begin[0]];
    let invertedEnd : Coordinate = [end[1],end[0]];
    if(begin[0] === end[0] && begin[1] === end[1])
        return 1;
    
    visited.push([invertedBegin[0],invertedBegin[1]]);
    return move(invertedBegin,invertedEnd,matrix,1,visited);

}