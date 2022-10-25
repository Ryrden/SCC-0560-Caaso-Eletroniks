import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <Routes>
                <NavBar />
                <Route path="/" element={<Home />} />
                <Footer />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
