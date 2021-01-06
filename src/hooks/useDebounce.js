export default function useDebounce (t = 500) {

    let time = t;
    let timeout = null;
    
    function debounce (func, ...rest) {

        clearTimeout(timeout);
        timeout = setTimeout(() => {func(...rest)}, time);
    }

    return debounce; 
}