// react imports
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// component imports
import Navbar from "./components/Navbar";

// hooks imports
import useDarkMode from "./hooks/useDarkMode";

function App() {
    // dark mode logic
    const [isDarkMode, setIsDarkMode] = useDarkMode();
    const toggleDarkMode = () => setIsDarkMode((mode) => !mode);
    useEffect(() => {
        document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <Router>
            <Navbar 
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <br/><br/>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
            <p>{isDarkMode?"true":"false"}</p>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/:domain" element={<h1>Domain</h1>} />
            </Routes>
        </Router>
    );
}

export default App;