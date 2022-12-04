import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { Box, CssBaseline, Typography, useTheme } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const theme = useTheme();

    const navigate = useNavigate();
    function gotoHome() {
        navigate("/");
    }

    return (
        <div>
            <Box>
                <CssBaseline />
                <NavBar />
                <Box id="Grandona"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "75vh",
                        position: "relative",
                    }}
                >
                    <Box id="box-verdinho"
                        width={"100%"}
                        height="10em"
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
                                <Typography ml={2} fontWeight="bold" color="info.main"
                                    sx={{
                                        typography: { xs: "h5", md: "h4" }
                                    }}>

                                    Compra realizada com sucesso!
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        style={{ backgroundColor: `${theme.palette.info.main}` }}
                        sx={{
                            width: { xs: "80%", sm: "70%", md: "50%" },
                            height: "75%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            marginBottom: "20em",
                            marginX: "auto",
                            position: "relative",
                            bottom: "1em",
                            borderRadius: "5px",

                        }}
                    >
                        <Box paddingX={5} paddingY={3}>
                            <Typography mb={2}>
                                Recebemos sua compra e estamos lhe enviando os detalhes do pagamento pelo e-mail cliente@email.com
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "flex-start", flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
                                <Button
                                    fullWidth={true}
                                    sx={{
                                        marginRight: { xs: "0", sm: "2em" },
                                        marginBottom: { xs: "1em", sm: "0" },
                                        border: "1px solid black"
                                    }}
                                    color="info"
                                    onClick={gotoHome}
                                >
                                    Voltar a Home</Button>
                                <Button fullWidth={true}>Ver minhas Compras</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />

        </div >
    );
};

export default Success;