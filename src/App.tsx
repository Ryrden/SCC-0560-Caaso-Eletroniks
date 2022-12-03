import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/LoginSignIn/Login/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkout from "@/Pages/Checkout/Checkout";
import Cart from "./Pages/Cart/Cart";
import Success from "@/Pages/Success/Success";
import SignIn from "@/Pages/LoginSignIn/Login/Login";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FCA90D", //Amarelo Caaso
        },
        secondary: {
            main: "#270039", //Roxo Chique
        },
        success: {
            main: "#048B43", //Verde Claro
        },
        info: {
            main: "#F7F7F7", // Branco
        },
        background: {
            default: "#131313", // Preto
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
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/carrinho" element={<Cart />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/checkout" element={<Cart />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
