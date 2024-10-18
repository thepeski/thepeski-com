// react imports
import { React, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// hooks imports
import useContainerPathWidths from "../hooks/useContainerPathWidths";

// component imports
import { ReactComponent as DarkModeIcon } from "../assets/icons/darkMode.svg";

function Navbar({ isDarkMode, toggleDarkMode }) {

    // track & deconstruct current path
    const location = useLocation();
    const [domain, topic, article, paragraph] = location.pathname.split("/").slice(1);

    // track container & path widths
    const [containerRef, pathRef, isContainerWider, updateWidth] = useContainerPathWidths();

    // update container width on path change
    useEffect(() => {
        updateWidth();
    }, [location.pathname, updateWidth]);

    return (

        // wrapper
        <nav className="fixed top-0 w-full shadow-lg">

            {/* container */}
            <div className={`
                flex justify-between items-center px-4 min-h-20 md:min-h-16
                text-lg md:text-sm
                ${isDarkMode ? "bg-navDark" : "bg-navLight"}
            `}>

                {/* path */}
                <div ref={containerRef} className="flex w-full mr-4">
                    <p ref={pathRef} className="inline">
                        {/* thepeski */}
                        <Link to="/" className={`
                            font-lb hover:underline
                            ${isDarkMode ? "text-blueDark" : "text-blueLight"}
                        `}>
                            thepeski
                        </Link>

                        {/* domain */}
                        <span className={`
                            font-lb
                            ${isDarkMode ? "text-borderDark" : "text-borderLight"}
                        `}>
                            {domain ? (!article && !paragraph) || isContainerWider ? " / " : "" : ""}
                        </span>

                        <Link to={domain} className={`
                            font-l hover:underline
                            ${isDarkMode ? "text-blueDark" : "text-blueLight"}
                        `}>
                            {domain ? (!article && !paragraph) || isContainerWider ? domain : "" : ""}
                        </Link>

                        {/* topic */}
                        <span className={`
                            font-lb
                            ${isDarkMode ? "text-borderDark" : "text-borderLight"}
                        `}>
                            {topic ? !paragraph || isContainerWider ? " / " : "" : ""}
                        </span>

                        <Link to={[domain, topic].join("/")} className={`
                            font-l hover:underline
                            ${isDarkMode ? "text-white" : "text-black"}
                        `}>
                            {topic ? !paragraph || isContainerWider ? topic : "" : ""}
                        </Link>

                        {/* article */}
                        <span className={`
                            font-lb
                            ${isDarkMode ? "text-borderDark" : "text-borderLight"}
                        `}>
                            {article ? " / " : ""}
                        </span>

                        <Link to={[domain, topic, article].join("/")} className={`
                            font-l hover:underline
                            ${isDarkMode ? "text-white" : "text-black"}`
                        }>
                            {article ? article : ""}
                        </Link>

                        {/* paragraph */}
                        <span className={`
                            font-lb
                            ${isDarkMode ? "text-borderDark" : "text-borderLight"}
                        `}>
                            {paragraph ? " / " : ""}
                        </span>

                        <Link to={[domain, topic, article, paragraph].join("/")} className={`
                            font-l hover:underline
                            ${isDarkMode ? "text-grayDark" : "text-grayLight"}
                        `}>
                            {paragraph ? paragraph : ""}
                        </Link>

                    </p>
                </div>

                {/* bottom border */}
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></span>

                {/* dark mode toggle */}
                <DarkModeIcon onClick={toggleDarkMode} className={`
                    max-w-8 max-h-8 md:w-6 md:h-6 mx-2 md:mx-0 cursor-pointer
                    ${isDarkMode ? "fill-white" : "fill-blueLight"}
                `} />
            </div>
        </nav>
    );
}

export default Navbar;