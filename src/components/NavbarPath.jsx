import React from "react";
import { Link } from "react-router-dom";

function NavbarPathItem({ to, text, customStyles }) {
    return <Link to={to} className={`hover:underline ${customStyles}`}>{text}</Link>;
}

function NavbarSlash({ darkMode }) {
    return <span className={`font-lbl text-lg ${darkMode ? "text-borderDark" : "text-borderLight"}`}>&nbsp;&nbsp;/&nbsp;&nbsp;</span>;
}

function NavBarDomain({ domain, darkMode }) {
    return (
        <>
            <NavbarPathItem
                to="/"
                text={"thepeski"}
                customStyles={`text-md font-lb ${darkMode ? "text-blueDark" : "text-blueLight"}`}
            />
            <NavbarSlash darkMode={darkMode} />
            <NavbarPathItem
                to={`/${domain}`}
                text={domain}
                customStyles={`text-md font-lb ${darkMode ? "text-white" : "text-black"}`}
            />
        </>
    );
}

function NavbarTopic({ domain, topic, darkMode }) {
    return (
        <>
            <NavBarDomain domain={domain} darkMode={darkMode} />
            <NavbarSlash darkMode={darkMode} />
            <NavbarPathItem
                to={`/${domain}/${topic}`}
                text={topic}
                customStyles={`font-l ${darkMode ? "text-white" : "text-black"}`}
            />
        </>
    );
}

function NavbarArticle({ domain, topic, article, darkMode }) {
    return (
        <>
            <NavbarTopic domain={domain} topic={topic} darkMode={darkMode} />
            <NavbarSlash darkMode={darkMode} />
            <NavbarPathItem
                to={`/${domain}/${topic}/${article}`}
                text={article}
                customStyles={`text-md font-l ${darkMode ? "text-white" : "text-black"}`}
            />
        </>
    );
}


// useParams!
function NavbarPath({ path, darkMode }) {
    if (path.domain === "" && path.topic === "" && path.article === "" && path.paragraph === "") {
        return (
            <NavbarPathItem to="/" text="thepeski" customStyles={`font-lb ${darkMode ? "text-blueDark" : "text-blueLight"}`} />
        );
    } else if (path.domain !== "" && path.topic === "" && path.article === "" && path.paragraph === "") {
        return (
            <NavBarDomain domain={path.domain} darkMode={darkMode} />
        );
    } else if (path.domain !== "" && path.topic !== "" && path.article === "" && path.paragraph === "") {
        return (
            <NavbarTopic domain={path.domain} topic={path.topic} darkMode={darkMode} />
        );
    } else if (path.domain !== "" && path.topic !== "" && path.article !== "" && path.paragraph === "") {
        return (
            <NavbarArticle domain={path.domain} topic={path.topic} article={path.article} darkMode={darkMode} />
        );
    } else if (path.domain !== "" && path.topic !== "" && path.article !== "" && path.paragraph !== "") {
        return (
            <>
                <NavbarArticle domain={path.domain} topic={path.topic} article={path.article} darkMode={darkMode} />
                <NavbarSlash darkMode={darkMode} />
                <NavbarPathItem
                    to={`/${path.domain}/${path.topic}/${path.article}/${path.paragraph}`}
                    text={path.paragraph}
                    customStyles={`font-l ${darkMode ? "text-grayDark" : "text-grayLight"}`}
                />
            </>
        );
    }
}

export default NavbarPath;