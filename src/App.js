// react imports
import {React, useEffect} from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

// local imports
import "./index.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

// hooks
import useDarkMode from "./hooks/useDarkMode";

function App() {
    let path = {domain: "finance", topic: "corporate-finance", article: "stock-valuation", paragraph: "determining-discount-rate"};

    // dark mode
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleTheme = () => setDarkMode((prev) => !prev);
    useEffect(() => {
        document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <Router>
            <Navbar 
                path={path}
                darkMode={darkMode} 
                toggleTheme={toggleTheme}
            />
            <Wrapper 
                path={path}
                darkMode={darkMode}
            />
        </Router>
    );
}

export default App;