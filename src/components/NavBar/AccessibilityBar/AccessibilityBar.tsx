import React from "react";
import "./AccessibilityBar.scss";

import iconeDislexia from "@/assets/imgs/iconeDislexia.svg";
import iconeContraste from "@/assets/imgs/iconeContraste.svg";
import iconeAumentarFonte from "@/assets/imgs/iconeAumentarFonte.svg";
import iconeDiminuirFonte from "@/assets/imgs/iconeDiminuirFonte.svg";
import { ThemeContext } from "@/App";
import { useTheme } from "@mui/material";

const AccessibilityBar = () => {
    const theme = useTheme();

    const maxFontSize = 20;
    const minFontSize = 12;

    const [setFontSize, setTheme] = React.useContext(ThemeContext);
    const increaseFont = () => {
        setFontSize(theme.typography.fontSize < maxFontSize ? theme.typography.fontSize + 1 : theme.typography.fontSize);
    };

    const decreaseFont = () => {
        setFontSize(theme.typography.fontSize > minFontSize ? theme.typography.fontSize - 1 : theme.typography.fontSize);
    };

    return (
        <div id="acessibility-container">
            <div id="box">
                <img src={iconeAumentarFonte} alt="ícone de aumento de fonte" onClick={increaseFont} />
                <img src={iconeDiminuirFonte} alt="ícone de diminuição de fonte" onClick={decreaseFont} />
                <img src={iconeContraste} alt="ícone de alteração de tema com alto contraste" onClick={() => setTheme()} />
            </div>
        </div>
    );
};

export default AccessibilityBar;
