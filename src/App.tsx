import React, { SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/LoginSignIn/Login/Login";
import { createTheme, Theme, ThemeProvider, useTheme } from "@mui/material/styles";
import Checkout from "@/Pages/Checkout/Checkout";
import Cart from "./Pages/Cart/Cart";
import Success from "@/Pages/Success/Success";
import SignIn from "@/Pages/LoginSignIn/SignIn/SignIn";
import ProductPage from "@/Pages/Product/[productId]";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import primaryTheme from "./themes/primary";
import highContrastTheme from "./themes/highContrastTheme";
import CButton from "./components/Button/Button";

type themeContextType = [
    setFontSize: (_: number) => void,
    setTheme: () => void
]

export const ThemeContext = React.createContext<themeContextType>([() => null, () => null]);

function App() {
    const PRIMARY_THEME = "PRIMARY_THEME";
    const HIGH_CONTRAST_THEME = "HIGH_CONTRAST_THEME";

    const muiTheme = useTheme();

    const [theme, setTheme] = React.useState<String>(PRIMARY_THEME);
    const [fontSize, setFontSize] = React.useState<number | undefined>(undefined);


    function toggleTheme() {
        if (theme == PRIMARY_THEME) {
            setTheme(HIGH_CONTRAST_THEME);
        } else setTheme(PRIMARY_THEME);
    }

    const getTheme = () => {
        if (theme == PRIMARY_THEME) {
            return primaryTheme(fontSize);
        }
        return highContrastTheme(fontSize);
    }

    const sizeFont = (fontSizing: number) => {
        setFontSize(fontSizing);
    }

    return (
        <div className="App">
            <ThemeProvider theme={getTheme()}>
                <ThemeContext.Provider value={[sizeFont, toggleTheme]}>
                    <ScrollToTop>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/success" element={<Success />} />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/checkout" element={<Cart />} />
                            <Route path="/product/:id" element={<ProductPage />} />
                        </Routes>
                    </ScrollToTop>
                </ThemeContext.Provider>
            </ThemeProvider>
        </div>
    );
}

export default App;
