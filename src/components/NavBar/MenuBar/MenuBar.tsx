import { Box, Stack } from "@mui/material";
import React from "react";
import "./MenuBar.scss";

const MenuBar = () => {
    return (
        <>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Stack id="menubar-container" justifyContent="space-between" direction="row" p="0.5rem 5rem">
                    <Box>Lançamentos</Box>
                    <Box>Computadores</Box>
                    <Box>Periféricos</Box>
                    <Box>Hardware</Box>
                    <Box>Eletrônicos</Box>
                </Stack>
            </Box>
        </>
    );
};

export default MenuBar;