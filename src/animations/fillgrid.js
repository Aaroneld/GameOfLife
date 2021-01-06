import { colorThemes } from './resources';


export default function (canvas, ctx, cellsize, theme) {

    ctx.globalAlpha = 1;
    
    ctx.fillStyle = colorThemes[theme].bg;
    ctx.strokeStyle = colorThemes[theme].stroke;

    for(let i = 0; i < canvas.width; i += cellsize){
        for(let k = 0; k < canvas.height; k+= cellsize){

            ctx.fillRect(k, i, cellsize - 1, cellsize - 1);
            ctx.strokeRect(k, i, cellsize, cellsize);
        }
    }
}