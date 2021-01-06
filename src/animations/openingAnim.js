import {fontCollection, colorThemes, colors} from './resources';

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

export default function openingAnim (canvas, ctx, cellSize, theme, font){


    const colors = colorThemes[theme].colors;
    const wordColors = colorThemes[theme].words
    const fontLetters = fontCollection[font];

    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    x -= x % cellSize;
    y -= y % cellSize;

    ctx.fillStyle = colors[getRandomInt(colors.length)];
    ctx.globalAlpha = .65;

    ctx.fillRect(x, y, cellSize - 1, cellSize -1);

    ctx.fillStyle = colors[getRandomInt(colors.length)];
    ctx.globalAlpha = .2;

    ctx.fillRect(x + 8, y + 8, cellSize, cellSize);

    ctx.fillStyle = colors[getRandomInt(colors.length)];
    ctx.globalAlpha = .1;

    ctx.fillRect(x + 14, y + 14, cellSize, cellSize);
    
    ctx.globalAlpha = 1;

    ctx.font = `${canvas.width * .04 * .75}px ${font}`;
    ctx.fillStyle = wordColors[getRandomInt(wordColors.length)];
    const letter = fontLetters[getRandomInt(fontLetters.length)];
    ctx.fillText(`${letter}`, x + cellSize * .15, y + cellSize * .72)

    

}