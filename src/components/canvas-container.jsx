import React, { useEffect, useState, useRef, useLayoutEffect, Suspense, lazy} from 'react'
import ErrorBoundary from './ErrorBoundary';

import Container from '../styles/canvas-container';

import StageFallback from './StageFallback'
const Stage = lazy(() => import('./Stage'));

export default function CanvasContainer({ cFont, cTheme, cPreset, ranVar, canvasWidth, cellSizeFactor }) {



    /* Phases: 
        0 setup
        1 openingAnim 
        2 Interactive State
        3 running 
        4 paused 
    */


    
    
    const [animPhase, setPhase] = useState(0);
    const [iteration, setIteration] = useState(0)
    


    const [triggerAddFrame, setAddFrameTrigger] = useState(0);
    const [cancelTrigger, setCancelTrigger] = useState(0);
    const [pauseTrigger, setPauseTrigger] = useState(0);

    const play = () => {
        setAddFrameTrigger(triggerAddFrame === 0? 1 : 0);
    }

    const cancel = () => {
        setCancelTrigger(cancelTrigger === 0? 1 : 0);
    }

    const pause = () => {
        setPauseTrigger(pauseTrigger === 0? 1 : 0);
    }
    
    //Set up canvases: connect action canvas to gamestate, getCtx for bgcanvas
    //once ctx has been grabbed for bgCanvas fill its grid
    // refire if either buffer context or theme choice changes
    //render fiery background more then once to compensate for rendering issues
    // if anim in phase 0 start opening Anim set phase to 1 
    //if anim in phase 1 (opening anim) cancel current anim pick up from their applying changes


    // if font choice changes and game is in phase one cancel current animation -> pick up with visual changes


    const handlePlay = _ => {

        console.log(animPhase);
        
        if(animPhase === 2 || animPhase === 4) {
            setPhase(3);
            setIteration(iteration + 1)
            play();
        }
        
    };

    const handlePause = _ => { 
        setPhase(animPhase + 1);
        pause();
    };

    const handleReset = _ => {
        setPhase(2);
        cancel();

    };

    return (
        <Container>
            <h3>{` Iterations: ${iteration}`}</h3>
            <ErrorBoundary>
                <Suspense fallback={<StageFallback canvasWidth={canvasWidth} />}>
                    <Stage 
                        animPhase={animPhase}
                        setPhase={setPhase}
                        setIteration={setIteration}
                        canvasWidth={canvasWidth}
                        triggerAddFrame={triggerAddFrame}
                        cancelTrigger={cancelTrigger}
                        pauseTrigger={pauseTrigger}
                        cellSizeFactor={cellSizeFactor}
                        cFont={cFont}
                        cPreset={cPreset}
                        cTheme={cTheme}
                        ranVar={ranVar}
                    />
                </Suspense> 
                
            </ErrorBoundary>
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
