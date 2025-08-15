import React from "react";
import Home from "./Home";
import About from "./about";
import Contato from "./Contato";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contato" element={<Contato />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;