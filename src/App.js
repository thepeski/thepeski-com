// react imports
import { React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// hooks imports
import useDarkMode from "./hooks/useDarkMode";

// component imports
import Navbar from "./components/Navbar";

// pages imports
import Home from "./pages/Home";
import Domain from "./pages/Domain";
import Topic from "./pages/Topic";
import Article from "./pages/Article";

function App() {

    // dark mode logic
    const [isDarkMode, setIsDarkMode] = useDarkMode();
    const toggleDarkMode = () => setIsDarkMode((mode) => !mode);
    useEffect(() => {
        document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <Router>

            {/* navbar */}
            <Navbar
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
            />

            {/* content */}
            <div className={`min-h-screen ${isDarkMode ? "bg-bgDark" : "bg-bgLight"}`}>
                <div className="mx-auto min-w-[200px] max-w-[1200px] pt-40 md:pt-48 pb-24 px-4 md:px-40">

                    {/* pages */}
                    <Routes>
                        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
                        <Route path="/:domain" element={<Domain isDarkMode={isDarkMode} />} />
                        <Route path="/:domain/:topic" element={<Topic isDarkMode={isDarkMode} />} />
                        <Route path="/:domain/:topic/:article" element={<Article isDarkMode={isDarkMode} />} />
                    </Routes>

                    {/* footer */}
                    <div className={`py-20 text-sm text-center ${isDarkMode ? "text-grayDark" : "text-grayLight"}`}>
                        Created by
                        <span className="font-lb">&nbsp;thepeski</span>
                        <span>.&nbsp;Contribute on&nbsp;</span>
                        <a href="https://github.com/thepeski/thepeski-com" className={`hover:underline ${isDarkMode ? "text-blueDark" : "text-blueLight"}`}>GitHub</a>
                        <span>.</span>
                    </div>

                </div>

            </div>

        </Router>
    );
}

export default App;