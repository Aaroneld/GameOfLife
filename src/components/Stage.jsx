import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import Container from "../styles/stage";
import useGameState from "../hooks/useGameState";
import useCanvasBuffer from "../hooks/useCanvasBuffer";
import useAnimation from "../hooks/useAnimation";

import { fillGrid, curtain, changeCell, drawStateP2 } from "../animations";
import openingAnim from "../animations/openingAnim";

export default function Stage({
  canvasWidth,
  setIteration,
  animPhase,
  setPhase,
  triggerAddFrame,
  pauseTrigger,
  cancelTrigger,
  cellSizeFactor,
  cTheme,
  cPreset,
  cFont,
  ranVar,
}) {
  const {
    canvas,
    ctx,
    cells,
    setCells,
    setInitialCellState,
    selectedCell,
    setCanvas,
    updateCell,
    deriveNextState,
    randomize,
    applyPreset,
  } = useGameState(cellSizeFactor);

  const prerenderOpenAnim = () => {
    bCanvas.width = bCanvas.height = canvas.width;
    console.log(canvas.width, cellSizeFactor);
    openingAnim(bCanvas, bCtx, canvas.width * cellSizeFactor, cTheme, cFont);
    ctx.drawImage(bCanvas, 0, 0);
  };

  const prerenderMainAnim = () => {
    bCanvas.width = bCanvas.height = canvas.width;
    cellsRef.current = deriveNextState(cellsRef.current);
    drawStateP2(
      bCanvas,
      bCtx,
      canvas.width * cellSizeFactor,
      cellsRef.current,
      cTheme,
      cFont
    );
    setIteration((prev) => prev + 1);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bCanvas, 0, 0);
  };

  const actionRef = useRef(null);
  const backgroundRef = useRef(null);
  const cellsRef = useRef(null);
  const [bCanvas, bCtx] = useCanvasBuffer();
  const [addFrame, cancel] = useAnimation();

  const [bgCtx, setBgCtx] = useState();

  useEffect(() => {
    if (!canvas) {
      setCanvas(actionRef.current);
      setBgCtx(backgroundRef.current.getContext("2d"));
    }
  }, []);

  useEffect(() => {
    cellsRef.current = cells;
    addFrame(300, prerenderMainAnim, bCanvas, bCtx, ctx);
  }, [triggerAddFrame]);

  useEffect(() => {
    cancel();
    setCells(cellsRef.current);
  }, [pauseTrigger]);

  useEffect(() => {
    if (![1, 0].includes(animPhase)) {
      cancel();
      setInitialCellState();
      setIteration(0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [cancelTrigger]);

  useEffect(() => {
    if (bgCtx) {
      fillGrid(
        backgroundRef.current,
        bgCtx,
        canvasWidth * cellSizeFactor,
        cTheme
      );

      if (cTheme === "fiery" || cTheme === "conformity") {
        for (let i = 0; i < 4; i++) {
          fillGrid(
            backgroundRef.current,
            bgCtx,
            canvasWidth * cellSizeFactor,
            cTheme
          );
        }
      }

      if (animPhase === 0 && ctx && bCtx) {
        setTimeout(() => {
          setPhase(animPhase + 1);
          addFrame(15, prerenderOpenAnim, bCanvas, bCtx, ctx);
        }, 1000);
      }
    }
  }, [bgCtx, ctx, cTheme]);

  useEffect(() => {
    if (animPhase === 1) {
      cancel();
      addFrame(15, prerenderOpenAnim, bCanvas, bCtx, ctx);
    }
  }, [cFont]);

  //if canvas width changes redraw canvas background
  //if phase one clear current action canvas image

  useEffect(() => {
    if (bgCtx) {
      fillGrid(
        backgroundRef.current,
        bgCtx,
        canvasWidth * cellSizeFactor,
        cTheme
      );

      if (cTheme === "fiery" || cTheme === "conformity") {
        for (let i = 0; i < 4; i++) {
          fillGrid(
            backgroundRef.current,
            bgCtx,
            canvasWidth * cellSizeFactor,
            cTheme
          );
        }
      }

      if (animPhase === 1) {
        if (bCtx) {
          bCtx.clearRect(0, 0, bCanvas.width, bCanvas.height);
        }
      }

      if (animPhase === 2) {
        drawStateP2(
          canvas,
          ctx,
          canvas.width * cellSizeFactor,
          cells,
          cTheme,
          cFont
        );
      }
    }
  }, [canvasWidth]);

  useEffect(() => {
    if (animPhase === 2) {
      changeCell(
        canvas,
        ctx,
        canvas.width * cellSizeFactor,
        cells,
        selectedCell,
        cTheme,
        cFont
      );
    }
  }, [selectedCell]);

  useEffect(() => {
    if (animPhase === 2) {
      const newState = randomize();
      drawStateP2(
        canvas,
        ctx,
        canvas.width * cellSizeFactor,
        newState,
        cTheme,
        cFont
      );
    }
  }, [ranVar]);

  useLayoutEffect(() => {
    if (animPhase === 2) {
      console.log("here", cPreset);

      setInitialCellState();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (cPreset === "none") {
        setInitialCellState();
      } else {
        const preset = applyPreset(cPreset);
        drawStateP2(
          canvas,
          ctx,
          canvas.width * cellSizeFactor,
          preset,
          cTheme,
          cFont
        );
      }
    }
  }, [cPreset]);

  const handleCanvasClick = (e) => {
    if (animPhase === 1) {
      cancel();
      curtain(200, canvas, ctx, canvas.width * cellSizeFactor);

      setPhase(animPhase + 1);
    }

    if (animPhase === 2) {
      updateCell(e);
    }
  };

  return (
    <Container
      style={{ height: `${canvasWidth}px`, width: `${canvasWidth}px` }}
      onClick={handleCanvasClick}
    >
      <div
        className={animPhase === 1 ? "openingAnim" : ""}
        style={{ height: `${canvasWidth}px`, width: `${canvasWidth}px` }}
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
    </Container>
  );
}
