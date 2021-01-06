
export default function useAnimation () {

    useAnimation.prototype.cancel = () => {
        useAnimation.prototype.cancelFrames = true;
    }
    
    const addFrame = (delay, cb, ...rest) => {

        let frameId = null;
        let start = null;
        let animId = Symbol()
        useAnimation.prototype.cancelFrames = false;
        useAnimation.prototype.currentAnim = animId;

        const requestFrame = () => {

            if(!start) start = Date.now();

            if(useAnimation.prototype.cancelFrames && start){
                cancelAnimationFrame(frameId);
                return
            } 

            else if(useAnimation.prototype.currentAnim === animId){

                if(Date.now() - start < delay){
                    frameId = requestAnimationFrame(requestFrame);
                }
                else {

                    cb(...rest);
                    start = Date.now();
                    frameId = requestAnimationFrame(requestFrame);
                }
            }  
        }

        requestFrame();
    } 

    return [
        addFrame, 
        useAnimation.prototype.cancel,
    ];
}


