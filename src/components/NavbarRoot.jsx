import React from "react";

import { Link } from "react-router-dom";

function NavbarRoot({ darkMode }) {
    return (
        <Link
            to="/"
            className={`
                font-bold text-lg hover:underline
                ${darkMode ? "text-blueDark" : "text-blueLight"}
            `}
        >
            thepeski
        </Link>
    );
}

export default NavbarRoot;