import { size } from '../styles/globals';

export default function deriveDimensionsFromTotalWindowSize () {


    function getRawWidth() {
        if(window.innerWidth >= size.desktop) return window.innerWidth * .35
        if(window.innerWidth >= size.laptop && window.innerWidth < size.desktop) return  window.innerWidth * .4;
        else if(window.innerWidth <= size.laptop && window.innerWidth >= size.tablet - 1) return window.innerWidth * .63
        else return window.innerWidth * .9
    }
  
    const rawWidth = getRawWidth()

    if(rawWidth > window.innerHeight * (3/4))
    {
        return rawWidth - window.innerHeight * (1/7);
    } else {
        return rawWidth
    }
}
