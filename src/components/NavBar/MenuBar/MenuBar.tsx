import { Box, Stack } from "@mui/material";
import React from "react";

const MenuBar = () => {
    return (
        <>
            <Box sx={{
                display: { xs: "none", md: "block" },
            }} >
                <Stack
                    bgcolor="primary.main"
                    sx={{
                        ":hover": {
                            cursor: "pointer"
                        }
                    }}
                    fontWeight="bold"
                    justifyContent="space-between"
                    direction="row"
                    p="0.5rem 5rem">
                    <Box className="dpt-option">Lançamentos</Box>
                    <Box className="dpt-option">Computadores</Box>
                    <Box className="dpt-option">Periféricos</Box>
                    <Box className="dpt-option">Hardware</Box>
                    <Box className="dpt-option">Eletrônicos</Box>
                </Stack>
            </Box>
        </>
    );
};

export default MenuBar;