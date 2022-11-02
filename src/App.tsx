import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import Cadastro from "@/Pages/Cadastro/Cadastro";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cart from "./Pages/Cart/Cart";

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
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/carrinho" element={<Cart />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
