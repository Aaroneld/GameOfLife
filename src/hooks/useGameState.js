import { useState, useEffect, useRef} from 'react'
import { presets } from '../animations/resources';

export default function useGameState (sizeFactor) {

    const [canvas, setCanvas] = useState(null);
    const [ctx, setCtx] = useState(null);
    const [cells, setCells] = useState(null);
    const [ selectedCell, setSelectedCell] = useState(null);


    useEffect(() => {
        if(!cells && canvas){
            setInitialCellState();
        }
    }, [canvas])

    useEffect(() => {

        if(canvas){
            setCtx(canvas.getContext('2d'));
        }
    }, [canvas])


    const setInitialCellState = () => {
        
        let cellState = [];

        for(let i = 0; i < canvas.width / (canvas.width * sizeFactor); i++)
        {
            cellState.push([]);

            for(let k = 0; k < canvas.height / (canvas.width * sizeFactor); k++){
                cellState[i].push(0);
            }
        }

        setCells(cellState);
    }

    const updateCell = e => {

        const rect = canvas.getBoundingClientRect()

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const pos = [
            ((x - (x % (canvas.width * sizeFactor))) / (canvas.width * sizeFactor)),
            ((y - (y % (canvas.width * sizeFactor))) / (canvas.width * sizeFactor)),
        ];

        let cellState;

        if(cells[pos[1]][pos[0]] === 0){
            cellState = cells.map((row , rIndex) => {
                return row.map((col, cIndex) => {
                    if(rIndex === pos[1] && cIndex == pos[0]) return 1
                    else return col
                })
            })
        } else {
            cellState = cells.map((row , rIndex) => {
                return row.map((col, cIndex) => {
                    if(rIndex === pos[1] && cIndex == pos[0]) return 0
                    else return col
                })
            })
        }
        
        setSelectedCell(
            [pos[0] * canvas.width * sizeFactor, 
            pos[1] * canvas.width * sizeFactor]
        );
        setCells(cellState);
    }

    const deriveNextState = (incomingState) => {

        let cellBuffer = incomingState.map( r => r.map(c => c));

        incomingState.forEach((r, rInd) => {
            r.forEach((c , cInd) => {

                const neighbors = getLiveNeighbors(rInd, cInd, incomingState);

                if(incomingState[rInd][cInd] === 1){
                    if(neighbors.length > 3 || neighbors.length < 2){
                        cellBuffer[rInd][cInd] = 0;
                    }
                };

                if(incomingState[rInd][cInd] === 0 && neighbors.length === 3){
                    cellBuffer[rInd][cInd] = 1;
                };

            });
        });

        setCells(cellBuffer);

        return cellBuffer
    }

    const getLiveNeighbors = (row, col, cellstate) => {


        let neighbors = [];
    
        for(let i = -1; i < 2; i++){
            for(let k = -1; k < 2; k++){
                
                if([i, k].toString() !== [0,0].toString()){
                    if(row + i  < 0){
                        if(col + i < 0) {
                            neighbors.push(cellstate[cellstate[0].length - 1][cellstate.length - 1]);
                        } else if(col + k > cellstate[0].length - 1) {
                            neighbors.push(cellstate[cellstate[0].length - 1][0])
                        } else {
                            neighbors.push(cellstate[cellstate[0].length - 1][col + k])
                        }
                    } else if(row + i > cellstate.length - 1){
                        if(col + k < 0) {
                            neighbors.push(cellstate[0][cellstate.length - 1]);
                        } else if(col + i > cellstate[0].length - 1) {
                            neighbors.push(cellstate[0][0]);
                        } else {
                            neighbors.push(cellstate[0][col + k]);
                        }
                    } else if(col + k < 0) {
                        neighbors.push(cellstate[row + i][cellstate[0].length - 1])
                    } else if(col + k > cellstate[0].length -1) {
                        neighbors.push(cellstate[row + i][0])
                    } else {
                        neighbors.push(cellstate[row + i][col + k])
                    }
                }
            }
        }

        return neighbors.filter(neighbor => neighbor === 1);
    }

    const randomize = () => {

        let newCellState = cells.map(r => r.map( _ => NaN));

        for(let i = 0; i < cells.length; i++){
            for(let k = 0; k < cells.length; k++){
                const rand = Math.round(Math.random());

                rand > .35 ? (
                    newCellState[i][k] = 0 
                    ) : (
                    newCellState[i][k] = 1
                    )
            }
        }

        setCells(newCellState);
        
        return newCellState;
    }

    const applyPreset = (preset) => {
        console.log('apply');

        let newCellState = cells.map(r => r.map( _ => 0));

        const center = Math.round(cells.length / 2);

        preset = presets[preset]

        preset.forEach(position => {
            newCellState[center + position[0]][center + position[1]] = 1
        })

        setCells(newCellState);

        return newCellState;
    }
    
    return {
        deriveNextState,
        selectedCell,
        setCanvas,
        canvas,
        ctx,
        cells,
        setCells,
        setInitialCellState,
        updateCell,
        randomize,
        applyPreset
    }
}