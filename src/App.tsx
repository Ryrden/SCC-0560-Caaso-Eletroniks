import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FCA90D",
        },
        secondary: {
            main: "#270039",
        },
        success: {
            main: "#18F27E",
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
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
