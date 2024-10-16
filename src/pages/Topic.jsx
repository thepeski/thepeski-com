// react imports
import React from "react";
import { useParams } from "react-router-dom";

function Topic({ isDarkMode }) {
    const { domain, topic } = useParams();

    return (
        <div className={isDarkMode ? "text-white" : "text-black"}>
            <div>{domain || "No domain provided"}</div>
            <div>{topic || "No topic provided"}</div>
        </div>
    );
}

export default Topic;