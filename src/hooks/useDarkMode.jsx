import { useEffect, useState } from "react";

function useDarkMode() {
    const [darkMode, setDarkMode] = useState(() => {

        // check if preference is saved in localStorage
        const savedDarkModePreference = localStorage.getItem("theme");

        // if saved preference is dark, return true, if light, return false, else return false (light theme by default)
        return savedDarkModePreference === "dark" ? true : savedDarkModePreference === "light" ? false : false;
    });

    useEffect(() => {
        // get current color preference
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

        // trigger setDarkMode when color preference changes
        const handleChange = (e) => setDarkMode(e.matches);
        isDarkMode.addEventListener("change", handleChange);

        return () => isDarkMode.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        // set theme in localStorage
        if (darkMode) localStorage.setItem("theme", "dark");
        else localStorage.setItem("theme", "light");
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;