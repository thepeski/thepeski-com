// react imports
import React from "react";

// local imports
import Content from "./Content";

function Wrapper({ path, darkMode }) {
    return (
        <div className={`
            flex justify-center
            ${darkMode ? "bg-bgDark text-textDark" : "bg-bgLight text-textLight"}
      `}>
            <Content 
                path={path}
                darkMode={darkMode}
            />
        </div>
    );
}

export default Wrapper;