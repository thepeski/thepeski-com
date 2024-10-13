import React from "react";


function Content({ path, darkMode }) {
    function handlePress() {
        return "";
    }

    return (
        <div
            className={`
                w-full max-w-7xl mx-auto max-w-7xl 
                px-2 md:px-4
                mt-20 md:mt-40 
                md:mx-20 lg:mx-40
                ${darkMode ? "text-white" : "text-dark"}
            `}
        >
            <div>{toString(darkMode)}</div>
        </div>
    );
}

export default Content;