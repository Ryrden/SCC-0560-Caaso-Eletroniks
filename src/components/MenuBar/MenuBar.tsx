import React from "react";
import "./MenuBar.scss";

const MenuBar = () => {
    return (
        <div id="menubar-container">
            <span className="department-option">Lançamentos</span>
            <span className="department-option">Computadores</span>
            <span className="department-option">Periféricos</span>
            <span className="department-option">Hardware</span>
            <span className="department-option">Eletrônicos</span>
        </div>
    );
};

export default MenuBar;