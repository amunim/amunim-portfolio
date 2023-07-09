import { useEffect, useState } from "react"

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<{ width?: number, hieght?: number }>({ width: undefined, hieght: undefined });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                hieght: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}