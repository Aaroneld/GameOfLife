import { fontCollection, colorThemes } from "./resources";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const drawStateP2 = (canvas, ctx, cellSize, cell, theme, font) => {
  const colors = colorThemes[theme].colors;
  const wordColors = colorThemes[theme].words;
  const fontLetters = fontCollection[font];

  cell.forEach((r, rIndex) => {
    r.forEach((c, cIndex) => {
      if (cell[rIndex][cIndex] === 1) {
        ctx.fillStyle = colors[getRandomInt(colors.length)];
        ctx.globalAlpha = 0.85;

        console.log(ctx.fillStyle, "22");

        ctx.fillRect(cIndex * cellSize, rIndex * cellSize, cellSize, cellSize);

        ctx.fillStyle = colors[getRandomInt(colors.length)];
        ctx.globalAlpha = 0.3;

        ctx.fillRect(
          cIndex * cellSize + 8,
          rIndex * cellSize + 8,
          cellSize,
          cellSize
        );

        ctx.fillStyle = colors[getRandomInt(colors.length)];
        ctx.globalAlpha = 0.2;

        ctx.fillRect(
          cIndex * cellSize + 14,
          rIndex * cellSize + 14,
          cellSize,
          cellSize
        );

        ctx.globalAlpha = 1;

        ctx.font = `${canvas.width * 0.04 * 0.75}px ${font}`;
        ctx.fillStyle = wordColors[getRandomInt(wordColors.length)];
        const letter = fontLetters[getRandomInt(fontLetters.length)];
        ctx.fillText(
          `${letter}`,
          cIndex * cellSize + cellSize * 0.15,
          rIndex * cellSize + cellSize * 0.72
        );
      } else {
        console.log("clear");
        ctx.clearRect(cIndex * cellSize, rIndex * cellSize, cellSize, cellSize);
      }
    });
  });
};
