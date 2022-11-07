import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cart from "./Pages/Cart/Cart";
import SignIn from "@/Pages/SignIn/SignIn";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FCA90D", //Amarelo Caaso
        },
        secondary: {
            main: "#270039", //Roxo Chique
        },
        success: {
            main: "#18F27E", //Verde Claro
        },
        info: {
            main: "#F7F7F7",
        },
        background: {
            default: "#131313",
        },
        divider: "#565656"
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/checkout" element={<Cart />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
