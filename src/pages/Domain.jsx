// react imports
import React from "react";
import { useParams } from "react-router-dom";

function Domain({ isDarkMode }) {
    const { domain } = useParams();

    return (
        <div className={isDarkMode ? "text-white" : "text-black"}>
            <div>{domain || "No domain provided"}</div>
        </div>
    );
}

export default Domain;