import { fontCollection, colorThemes } from "./resources";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const changeCell = (canvas, ctx, cellSize, cells, cell, theme, font) => {
  const colors = colorThemes[theme].colors;
  const wordColors = colorThemes[theme].words;
  const fontLetters = fontCollection[font];

  console.log(cells[cell[1] / cellSize][cell[0] / cellSize]);

  if (cells[cell[1] / cellSize][cell[0] / cellSize] === 0) {
    console.log("dasd");
    ctx.clearRect(cell[0], cell[1], cellSize, cellSize);
  } else {
    // ctx.globalAlpha = 1;

    // ctx.fillStyle = colors[getRandomInt(colors.length)];
    // ctx.fillRect(cell[0], cell[1], cellSize, cellSize)

    // ctx.font = `${canvas.width * .04 * .75}px ${font}`;

    // ctx.fillStyle = wordColors[getRandomInt(wordColors.length)];
    // const letter = fontLetters[getRandomInt(fontLetters.length)];
    // ctx.fillText(`${letter}`, cell[0] + cellSize * .15, cell[1] + cellSize * .72)

    ctx.fillStyle = colors[getRandomInt(colors.length)];
    ctx.globalAlpha = 0.85;

    ctx.fillRect(cell[0], cell[1], cellSize, cellSize);

    ctx.fillStyle = colors[getRandomInt(colors.length)];
    ctx.globalAlpha = 0.3;

    ctx.fillRect(cell[0] + 8, cell[1] + 8, cellSize, cellSize);

    ctx.fillStyle = colors[getRandomInt(colors.length)];
    ctx.globalAlpha = 0.2;

    ctx.fillRect(cell[0] + 14, cell[1] + 14, cellSize, cellSize);

    ctx.globalAlpha = 1;

    ctx.font = `${canvas.width * 0.04 * 0.75}px ${font}`;
    ctx.fillStyle = wordColors[getRandomInt(wordColors.length)];
    const letter = fontLetters[getRandomInt(fontLetters.length)];
    ctx.fillText(
      `${letter}`,
      cell[0] + cellSize * 0.15,
      cell[1] + cellSize * 0.72
    );
  }
};
