import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindow] = useState({
        width: undefined,
        height: undefined
    });
    useEffect(() => {
        const handleResize = () => {
            setWindow({
                width: window.innerWidth,
                height: window.innerHeight
            });
       }
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    return windowSize;
}

export default useWindowSize