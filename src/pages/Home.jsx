import React from "react";
import { Link } from "react-router-dom";

function Home({ isDarkMode }) {

    return (
        <div className={isDarkMode ? "text-white" : "text-black"}>
            <Link to="/finance/corporate-finance/dividend-discount-model/general-formula">Dividend Discount Model</Link>
            {/* <br /> */}
            {/* <Link to="/coding">Coding</Link> */}
            {/* <br /> */}
            {/* <Link to="/ai">{"Artificial Intelligence".toLowerCase().split(" ").join("-")}</Link> */}
        </div>
    );
}

export default Home;