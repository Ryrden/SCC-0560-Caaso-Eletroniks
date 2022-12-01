import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { Box, CssBaseline, Grid, Typography, useTheme } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const Success = () => {
    const theme = useTheme();

    const [currency, setCurrency] = React.useState("BRL");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <Box>

                <CssBaseline />
                <NavBar />
                <Box id="Grandona"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }}
                >
                    <Box id="box-verdinho"
                        width={"100%"}
                        paddingX={"20%"}
                        paddingY="2%"
                        boxSizing={"border-box"}
                        style={{ backgroundColor: `${theme.palette.success.main}` }}
                    >
                        <Box
                            pt={2}
                            height="100%"
                            fontSize={"1rem"}
                            sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <TaskAltIcon sx={{ fontSize: "5em" }} color="info" />
                                <Typography ml={2} variant="h4" fontWeight="bold" color="info.main"
                                >
                                    Compra realizada com sucesso!
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: "50%",
                        height: "100px",
                        backgroundColor: "red",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20em"
                    }}>
                    </Box>
                </Box>
            </Box>
            <Footer />

        </div >
    );
};

export default Success;