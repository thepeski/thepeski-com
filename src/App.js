// react imports
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// component imports
import Navbar from "./components/Navbar";

function App() {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/:domain" element={<h1>Domain</h1>} />
            </Routes>
        </Router>
    );
}

export default App;