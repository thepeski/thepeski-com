import React from "react";

function Navbar({ isDarkMode, toggleDarkMode }) {
    return (
        <nav className="fixed top-0 w-full shadow-lg">
            <div className={`
                    flex justify-between items-center p-4 border-b
                    ${isDarkMode ? "bg-bgDark border-borderDark" : "bg-bgLight text-black border-borderLight"}
                `}
            >
                <div>path</div>
                <div>icon</div>
            </div>
        </nav>
    );
}

export default Navbar;