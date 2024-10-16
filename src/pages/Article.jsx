// react imports
import React from "react";
import { useParams } from "react-router-dom";

function Article({ isDarkMode }) {
    const { domain, topic, article } = useParams();

    return (
        <div className={isDarkMode ? "text-white" : "text-black"}>
            <div>{domain || "No domain provided"}</div>
            <div>{topic || "No topic provided"}</div>
            <div>{article || "No article provided"}</div>
        </div>
    );
}

export default Article;