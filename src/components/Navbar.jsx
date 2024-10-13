import React from "react";

import { ReactComponent as DarkModeIcon } from "../assets/icons/darkMode.svg";

import NavbarPath from "./NavbarPath";

function Navbar({ path, darkMode, toggleTheme}) {

    return (
        <nav
            className={`
                fixed top-0 w-full border-b shadow-lg
                ${darkMode ? "bg-navDark border-borderDark" : "bg-navLight border-borderLight"}
            `}
        >
            <div className="flex justify-items items-center max-w-7xl mx-auto px-2 md:px-4 py-4">
            
                <NavbarPath 
                    path={path} 
                    darkMode={darkMode}
                />

                <DarkModeIcon className={`
                    w-6 h-6 ml-auto cursor-pointer
                    ${darkMode ? "fill-white" : "fill-blueLight"}`}
                    onClick={toggleTheme} />
            </div>
        </nav>
    );
}

export default Navbar;