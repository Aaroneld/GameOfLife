export default function useCanvasBuffer(){

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    return [canvas, ctx]; 
}