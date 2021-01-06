import React, { useState, useEffect } from 'react'
import deriveDimensionsFromTotalWindowSize from '../utils/deriveDimensionsFromeTotalWindowSize';
import useDebounce from './useDebounce';


export default function useResize (sizeFactor) {

    const [width, setWidth] = useState(() => {
        const rawSize = deriveDimensionsFromTotalWindowSize()
        return Math.round(rawSize) - Math.round(rawSize) % (1/sizeFactor)
    });
    const debounce = useDebounce();

    useEffect(() => {
        window.addEventListener('resize', (_) => {debounce(() => {
            const rawSize = deriveDimensionsFromTotalWindowSize()
            setWidth(Math.round(rawSize) - Math.round(rawSize) % (1/sizeFactor))
        })});
        
    }, [])

    useEffect(() => {
        const rawSize = deriveDimensionsFromTotalWindowSize()
        setWidth(Math.round(rawSize) - Math.round(rawSize) % (1/sizeFactor))
    }, [])

    return width;
}