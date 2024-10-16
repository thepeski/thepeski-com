// react imports
import { useState, useEffect } from "react";

function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const darkModePreference = localStorage.getItem("theme"); // check if preference is saved in localStorage
        return darkModePreference === "dark" ? true : darkModePreference === "light" ? false : true; // default to dark mode
    });

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)"); // get current color preference

        const handleChange = (e) => setIsDarkMode(e.matches); // trigger setDarkMode when color preference changes
        darkModeMediaQuery.addEventListener("change", handleChange); // listen for changes
        return () => darkModeMediaQuery.removeEventListener("change", handleChange); // stop listening when component unmounts
    }, []); // run effect only once

    useEffect(() => {
        if (isDarkMode) localStorage.setItem("theme", "dark");
        else localStorage.setItem("theme", "light");
    }, [isDarkMode]); // run effect when isDarkMode changes

    return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;