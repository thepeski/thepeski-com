// react imports
import { React } from "react";
import { Link, useLocation } from "react-router-dom";

// component imports
import { ReactComponent as DarkModeIcon } from "../assets/icons/darkMode.svg";

function Navbar({ isDarkMode, toggleDarkMode }) {

    // track & deconstruct current path
    const location = useLocation();
    const [domain, topic, article, paragraph] = location.pathname.split("/").slice(1);

    return (

        // wrapper
        <nav className="fixed top-0 w-full shadow-lg">

            {/* container */}
            <div className={`
                flex justify-between items-center p-4
                ${isDarkMode ? "bg-navDark" : "bg-navLight"}
            `}>

                {/* path */}
                <p>
                    {/* thepeski */}
                    <span>
                        <Link to="/" className={`
                            font-lb text-sm hover:underline
                            ${isDarkMode ? "text-blueDark" : "text-blueLight"}
                        `}>
                            thepeski
                        </Link>
                    </span>

                    {/* domain */}
                    <span className={`
                        font-lb text-md
                        ${isDarkMode ? "text-borderDark" : "text-borderLight"}
                    `}>
                        {domain ? " / " : ""}
                    </span>

                    <Link to={domain} className={`
                        font-l text-sm hover:underline
                        ${isDarkMode ? "text-blueDark" : "text-blueLight"}
                    `}>
                        {domain}
                    </Link>

                    {/* topic */}
                    <span className={`
                        font-lb text-md
                        ${isDarkMode ? "text-borderDark" : "text-borderLight"}
                    `}>
                        {topic ? " / " : ""}
                    </span>

                    <Link to={[domain, topic].join("/")} className={`
                        font-l text-sm hover:underline
                        ${isDarkMode ? "text-white" : "text-black"}
                    `}>
                        {topic}
                    </Link>

                    {/* article */}
                    <span className={`
                        font-lb text-md
                        ${isDarkMode ? "text-borderDark" : "text-borderLight"}
                    `}>
                        {article ? " / " : ""}
                    </span>

                    <Link to={[domain, topic, article].join("/")} className={`
                        font-l text-sm hover:underline
                        ${isDarkMode ? "text-white" : "text-black"}`
                    }>
                        {article}
                    </Link>

                    {/* paragraph */}
                    <span className={`
                        font-lb text-md
                        ${isDarkMode ? "text-borderDark" : "text-borderLight"}
                    `}>
                        {paragraph ? " / " : ""}
                    </span>

                    <Link to={[domain, topic, article, paragraph].join("/")} className={`
                        font-l text-sm hover:underline
                        ${isDarkMode ? "text-grayDark" : "text-grayLight"}
                    `}>
                        {paragraph}
                    </Link>

                </p>

                {/* bottom border */}
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></span>

                {/* dark mode toggle */}
                <DarkModeIcon onClick={toggleDarkMode} className={`
                    w-6 h-6 ml-auto cursor-pointer
                    ${isDarkMode ? "fill-white" : "fill-blueLight"}
                `}/>
            </div>
        </nav>
    );
}

export default Navbar;