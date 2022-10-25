import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import Footer from "@/components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
