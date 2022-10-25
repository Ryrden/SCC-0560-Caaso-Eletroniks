import { Container, Box } from "@mui/material";
import React from "react";
import "./MenuBar.scss";

const MenuBar = () => {
    return (
        <>
            {/* Faz uma lista na horizontal contendo Lançamentos, COmputadores, Periféricos, Hardware, Eletrônicos com material Ui */}
            <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 5rem" }}>
                <Box>Lançamentos</Box>
                <Box>Computadores</Box>
                <Box>Periféricos</Box>
                <Box>Hardware</Box>
                <Box>Eletrônicos</Box>
            </Container>

            {/*<div id="menubar-container">
                <span className="department-option">Lançamentos</span>
                <span className="department-option">Computadores</span>
                <span className="department-option">Periféricos</span>
                <span className="department-option">Hardware</span>
                <span className="department-option">Eletrônicos</span>
            </div> */}
        </>
    );
};

export default MenuBar;