
export const curtain = (delay, canvas, ctx, cellsize, offset = 0) => {

    const center = (canvas.width / cellsize) % 2 === 0 ? (
        (canvas.width / cellsize) / 2
    ) : (
        ((canvas.width / cellsize) + 1) / 2
    );

    if(center + offset > canvas.width / cellsize) { return }

    if((canvas.width / cellsize) % 2 !== 0 && offset === 0){
        
        for(let cell = 0; cell <=(canvas.width / cellsize + 10) * cellsize; cell += cellsize){
            ctx.clearRect(center * cellsize - cellsize, cell, cellsize, cellsize);
        }
    } else {    

        for(let cell = 0; cell <= (canvas.width / cellsize + 10) * cellsize; cell += cellsize){
            ctx.clearRect((center - offset) * cellsize - cellsize, cell, cellsize, cellsize);
            ctx.clearRect((center + offset ) * cellsize - cellsize, cell, cellsize, cellsize );
        }
    }

    setTimeout(() => {
        curtain(delay, canvas, ctx, cellsize, offset + 1);
    }, delay)
}