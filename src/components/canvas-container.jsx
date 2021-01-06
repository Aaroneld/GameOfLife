import React, { useEffect, useState, useRef, useLayoutEffect} from 'react'

import Container from '../styles/canvas-container';

import useResize from '../hooks/useResize';
import useGameState from '../hooks/useGameState';
import useCanvasBuffer from '../hooks/useCanvasBuffer';
import useAnimation from '../hooks/useAnimation';

import { fillGrid, curtain, changeCell, drawStateP2 } from '../animations';
import openingAnim from '../animations/openingAnim';

export default function CanvasContainer({ cFont, cTheme, cPreset, ranVar }) {

    const prerenderOpenAnim = () => {
        bCanvas.width = bCanvas.height = canvas.width;
        openingAnim(bCanvas, bCtx, canvas.width * cellSizeFactor, cTheme, cFont);
        ctx.drawImage(bCanvas, 0 ,0)
    }

    const prerenderMainAnim = () => {
        bCanvas.width = bCanvas.height = canvas.width;
        cellsRef.current = deriveNextState(cellsRef.current); 
        drawStateP2(bCanvas, bCtx, canvas.width * cellSizeFactor, cellsRef.current, cTheme, cFont);
        iteration.current += 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(bCanvas, 0, 0);
    }

    /* Phases: 
        0 setup
        1 openingAnim 
        2 Interactive State
        3 running 
        4 paused 
    */

    const cellSizeFactor = .04; 
    
    const actionRef = useRef(null);
    const backgroundRef = useRef(null);
    const [bgCtx, setBgCtx] = useState();
    const [animPhase, setPhase] = useState(0);
    const iteration = useRef(0);
    const cellsRef = useRef(null);

    const canvasWidth = useResize(cellSizeFactor);
    const [bCanvas, bCtx] = useCanvasBuffer();
    const [addFrame, cancel] = useAnimation();
    const {canvas, ctx, cells, setCells,setInitialCellState, selectedCell, setCanvas, updateCell, deriveNextState, randomize, applyPreset} = useGameState(cellSizeFactor);
    
    //Set up canvases: connect action canvas to gamestate, getCtx for bgcanvas

    useEffect(() => {
        if(!canvas){
            setCanvas(actionRef.current)
            setBgCtx(backgroundRef.current.getContext('2d'))
        }

    }, [])


    //once ctx has been grabbed for bgCanvas fill its grid
    // refire if either buffer context or theme choice changes
    //render fiery background more then once to compensate for rendering issues
    // if anim in phase 0 start opening Anim set phase to 1 
    //if anim in phase 1 (opening anim) cancel current anim pick up from their applying changes

    useEffect(() => {

        if(bgCtx){            
            fillGrid(backgroundRef.current, bgCtx, canvasWidth * cellSizeFactor, cTheme);

            if(cTheme === 'fiery' || cTheme === 'conformity'){
                for(let i = 0; i < 4; i++){
                    fillGrid(backgroundRef.current, bgCtx, canvasWidth * cellSizeFactor, cTheme);
                }  
            }   

            if(animPhase === 0 && ctx && bCtx){
                setPhase(animPhase + 1)
                addFrame(15, prerenderOpenAnim, bCanvas, bCtx, ctx);
            }
            if(animPhase === 1){
                cancel()
                addFrame(15, prerenderOpenAnim, bCanvas, bCtx, ctx);
            }
        }

    }, [bgCtx, ctx, cTheme]);

    // if font choice changes and game is in phase one cancel current animation -> pick up with visual changes

    useEffect(() => {

        if(animPhase === 1){
            cancel();
            addFrame(15, prerenderOpenAnim, bCanvas, bCtx, ctx);
        }
    }, [cFont])

    //if canvas width changes redraw canvas background
    //if phase one clear current action canvas image 

    useEffect(() => {
        if(bgCtx) {

            fillGrid(backgroundRef.current, bgCtx, canvasWidth * cellSizeFactor, cTheme);
            
            if(cTheme === 'fiery' || cTheme === 'conformity'){
                for(let i = 0; i < 4; i++){
                    fillGrid(backgroundRef.current, bgCtx, canvasWidth * cellSizeFactor, cTheme);
                }  
            }   

            if(animPhase === 1){
                if(bCtx) {
                    bCtx.clearRect(0,0,bCanvas.width, bCanvas.height);
                }
            }

            if(animPhase === 2){
                drawStateP2(canvas, ctx, canvas.width * cellSizeFactor, cells, cTheme, cFont);
            }   
        }
    }, [canvasWidth])

    useEffect(() => {

        if(animPhase === 2){
            changeCell(
                canvas,
                ctx, 
                canvas.width * cellSizeFactor,
                cells,
                selectedCell,
                cTheme,
                cFont
            )
        }

    }, [selectedCell])

    useEffect(() => {
        if(animPhase === 2){
            const newState = randomize();
            drawStateP2(canvas, ctx, canvas.width * cellSizeFactor, newState, cTheme, cFont);
        }
    }, [ranVar])

    // useEffect(() => {
    //     if(animPhase === 2){
    //         drawStateP2(canvas, ctx, canvas.width * cellSizeFactor, cells, cTheme, cFont);
    //     }
    // }, [cells])

    useLayoutEffect(() => {
        

        if(animPhase === 2){

            console.log('here', cPreset)

            setInitialCellState();
            ctx.clearRect(0,0, canvas.width, canvas.height);

            if(cPreset === 'none') {
                setInitialCellState();
            } else {
                const preset = applyPreset(cPreset);
                drawStateP2(canvas, ctx, canvas.width * cellSizeFactor, preset, cTheme, cFont)
            }


        }

    }, [cPreset])

    const handleCanvasClick = e => {
        
        if(animPhase === 1){
            cancel();
            curtain(200, canvas, ctx, canvas.width * cellSizeFactor);
            setPhase(animPhase + 1);
        }

        if(animPhase === 2){
            updateCell(e);
        }
    }

    const handlePlay = _ => {

        console.log(animPhase);
        
        if(animPhase === 2 || animPhase === 4) {
            setPhase(3);
            iteration.current += 1;
            cellsRef.current = cells; 
            addFrame(300, prerenderMainAnim, bCanvas, bCtx, ctx);
        }
        
    };

    const handlePause = _ => { 
        setPhase(animPhase + 1);
        cancel();
        setCells(cellsRef.current);
    };

    const handleReset = _ => {
        setPhase(2);
        cancel();
        setInitialCellState();
        iteration.current = 0;
        ctx.clearRect(0,0, canvas.width, canvas.height);
    };

    return (
        <Container>
            <h3>{` Iterations: ${iteration.current}`}</h3>
            <div id="stage" 
                style={{height: `${canvasWidth}px`, width: `${canvasWidth}px`}}
                onClick={handleCanvasClick}
                >
                <canvas 
                    id="background-layer" 
                    height={canvasWidth}
                    width={canvasWidth}
                    ref={backgroundRef}
                />
                <canvas 
                    height={canvasWidth}
                    width={canvasWidth}
                    id="action"
                    ref={actionRef}
                    />
            </div>
            <div id="buttons">
                    <button 
                        id="play" 
                        onClick={handlePlay}
                        disabled={![2,4].includes(animPhase)}
                        style={{
                            filter: `${![2,4].includes(animPhase) ? 'brightness(85%)' : ''}`
                        }}
                    >Start</button>
                    <button 
                        id="pause" 
                        onClick={handlePause}
                        disabled={!animPhase === 3}
                        style={{
                            filter: `${![3].includes(animPhase) ? 'brightness(85%)' : ''}`
                        }}
                    >Pause Game</button>
                    <button 
                        id="reset" 
                        onClick={handleReset}
                        disabled={![3,4].includes(animPhase)}
                        style={{
                            filter: `${![3,4].includes(animPhase) ? 'brightness(85%)' : ''}`
                        }}
                    >Reset</button>
            </div>
        </Container>
    )
}
