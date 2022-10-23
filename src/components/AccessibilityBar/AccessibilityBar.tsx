import React from "react";
import "./AccessibilityBar.scss";

import iconeDislexia from "@/assets/imgs/iconeDislexia.svg";
import iconeContraste from "@/assets/imgs/iconeContraste.svg";
import iconeAumentarFonte from "@/assets/imgs/iconeAumentarFonte.svg";
import iconeDiminuirFonte from "@/assets/imgs/iconeDiminuirFonte.svg";

const AccessibilityBar = () => {
    return (
        <div id="acessibility-container">
            <div id="box">
                <img src={iconeDislexia} alt="" />
                <img src={iconeAumentarFonte} alt="" />
                <img src={iconeDiminuirFonte} alt="" />
                <img src={iconeContraste} alt="" />
            </div>
        </div>
    );
};

export default AccessibilityBar;