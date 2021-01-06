import { fontCollection , colorThemes } from './resources';

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

export const drawStatePhase3 = (
    canvas,
    ctx,
    cellsize,
    cells,
    theme,
    font
) => {

    const colors = colorThemes[theme].colors;
    const wordColors = colorThemes[theme].words;
    const fontLetters = fontCollection[font];

    cells.forEach( (r, rIndex) => {
        r.forEach((c, cIndex) => {
            if(cells[rIndex][cIndex] === 1){
                ctx.globalAlpha = 1;

                ctx.fillStyle = colors[getRandomInt(colors.length)];
                ctx.fillRect(cIndex * cellsize, rIndex * cellsize, cellsize, cellsize);

                ctx.font = `${canvas.width * .04 * .75}px ${font}`;

                ctx.fillStyle = wordColors[getRandomInt(wordColors.length)];
                const letter = fontLetters[getRandomInt(fontLetters.length)];

                ctx.fillText(`${letter}`, cIndex * cellsize + (cellsize * .15), rIndex * cellsize + (cellsize * .72))
            } else {
                ctx.clearRect(cIndex * cellsize, rIndex * cellsize, cellsize, cellsize);
            }
        });
    });
}