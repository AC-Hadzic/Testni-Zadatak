import { useEffect, useState } from "react";

export function useScreenWidth(size) {
const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        let timer;

        const handleResize = () => {
            clearTimeout(timer);

            timer = setTimeout (() => {
                setScreenWidth(window.innerWidth);
            }, 100)
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer)
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // console.log(screenWidth);
    return screenWidth >= size ? false : true;
};