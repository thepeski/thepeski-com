import { useRef, useState, useEffect, useCallback } from "react";

function useContainerPathWidths() {
    const containerRef = useRef(null);
    const pathRef = useRef(null);
    const [isContainerWider, setIsContainerWider] = useState(false);

    const updateWidth = useCallback(() => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const pathWidth = pathRef.current?.offsetWidth || 0;
        setIsContainerWider(containerWidth > pathWidth);
    }, []);

    useEffect(() => {
        let debounceTimeout;
        const debounceUpdate = () => {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(updateWidth, 100);
        };

        // Initial update
        updateWidth();
        window.addEventListener("resize", debounceUpdate);

        return () => {
            clearTimeout(debounceTimeout);
            window.removeEventListener("resize", debounceUpdate);
        };
    }, [updateWidth]);

    return [containerRef, pathRef, isContainerWider, updateWidth];
}

export default useContainerPathWidths;
