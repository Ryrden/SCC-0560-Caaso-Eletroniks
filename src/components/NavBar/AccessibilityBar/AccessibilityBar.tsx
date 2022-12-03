import React from "react";
import "./AccessibilityBar.scss";

import iconeDislexia from "@/assets/imgs/iconeDislexia.svg";
import iconeContraste from "@/assets/imgs/iconeContraste.svg";
import iconeAumentarFonte from "@/assets/imgs/iconeAumentarFonte.svg";
import iconeDiminuirFonte from "@/assets/imgs/iconeDiminuirFonte.svg";
import { FontContext } from "@/App";

const AccessibilityBar = () => {

    const maxFontSize = 20;
    const minFontSize = 12;

    const [fontSize, setFontSize] = React.useContext(FontContext);
    const increaseFont = () => {
        setFontSize((prevFontSize: number) => {
            if (prevFontSize < maxFontSize) {
                return prevFontSize + 1;
            }
            return prevFontSize;
        });
    };

    const decreaseFont = () => {
        setFontSize((prevFontSize: number) => {
            if (prevFontSize > minFontSize) {
                return prevFontSize - 1;
            }
            return prevFontSize;
        });
    };

    return (
        <div id="acessibility-container">
            <div id="box">
                <img src={iconeDislexia} alt="" />
                <img src={iconeAumentarFonte} alt="" onClick={increaseFont} />
                <img src={iconeDiminuirFonte} alt="" onClick={decreaseFont} />
                <img src={iconeContraste} alt="" />
            </div>
        </div>
    );
};

export default AccessibilityBar;