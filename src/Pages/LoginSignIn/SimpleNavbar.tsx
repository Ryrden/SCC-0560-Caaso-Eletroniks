import * as React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import logo from "@/assets/imgs/logo.svg";
import { Link } from "react-router-dom";
import AccessibilityBar from "@/components/NavBar/AccessibilityBar/AccessibilityBar";

const SimpleNavbar = () => {
    return (
        <>
            <AccessibilityBar />
            <AppBar id="simple-navbar-container" position="static" color="secondary" sx={{
                marginBottom: "2rem"
            }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-start" },
                        padding: "1rem"
                    }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            <img src={logo} alt="Logo da Empresa Caaso Eletroniks" />
                        </Typography>
                    </Box>
                </Link>
            </AppBar>
        </>
    );
};

export default SimpleNavbar;