import React from "react";
import { Box, CssBaseline, Divider, IconButton, Rating, Typography, useTheme } from "@mui/material";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import GenericCard from "@/components/GenericCard/GenericCard";
import { getAsCurrency } from "@/utils/getAsCurrency";
import CButton from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const ProductPage = () => {
    const theme = useTheme();

    const breadcrumbs = [
        {
            to: "/",
            label: "Página Inicial",
            current: false
        },
        {
            to: "",
            label: "PC Gamer Concórdia AMD Ryzen",
            current: true
        },
    ];

    return <div>
        <Box>
            <CssBaseline />
            <NavBar />

            <Box marginX={"auto"} marginY={"100px"} paddingX={"30px"} sx={{ width: { xs: "100%", sm: "80%", md: "90%", lg: "1100px" } }}>

                <Box marginBottom={"50px"}>
                    <Breadcrumb
                        navigators={breadcrumbs}
                    />
                </Box>

                <Box width={"100%"} borderRadius={"10px"}>
                    <GenericCard>
                        <Box width={"100%"} display={"flex"}
                            sx={{
                                padding: { xs: "16px", sm: "20px", md: "30px" },
                                gap: { xs: "10px", sm: "16px", md: "30px" },
                                flexDirection: { xs: "column", md: "row" },
                                maxHeight: { md: "600px" }
                            }}>
                            <Box width={"100%"}
                                sx={{ height: { xs: "300px", md: "500px" } }}
                                borderRadius={"5px"}
                                overflow={"hidden"}
                                style={{
                                    backgroundPosition: "center",
                                    backgroundImage: "url(https://picsum.photos/seed/picsum/200/300)",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                }} />

                            <Box width={"100%"}
                                display={"flex"}
                                flexDirection={"column"}
                                justifyContent={"space-between"}
                                gap={"30px"}>
                                <Box>
                                    <Typography
                                        variant="h4"
                                        color={"#FFFFFF"}
                                        marginBottom={"25px"}>
                                        PC Gamer Concórdia AMD Ryzen
                                    </Typography>

                                    <Box marginY={"40px"}>
                                        <Rating name="read-only" value={4.5} readOnly size={"large"} precision={0.5} />
                                    </Box>

                                    <Box display={"flex"}
                                        justifyContent={"space-between"}
                                        gap={"5px"}
                                        sx={{ flexDirection: { xs: "column", sm: "row" } }}>
                                        <Box width={"100%"}>
                                            <Typography
                                                variant="h5"
                                                color={"#FFFFFF"}>
                                                {getAsCurrency(5999)}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color={"#FFFFFF"}>
                                                À vista
                                            </Typography>
                                        </Box>

                                        <Divider orientation={"vertical"} flexItem />

                                        <Box sx={{ textAlign: { xs: "left", sm: "right" } }} width={"100%"}>
                                            <Typography
                                                variant="h5"
                                                color={"#FFFFFF"}>
                                                {getAsCurrency(6899)}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color={"#FFFFFF"}>
                                                À prazo
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>


                                <Box>
                                    <CButton size={"large"} startIcon={<AddShoppingCartIcon />}>Comprar</CButton>
                                    <Box display={"flex"} gap={"5px"} alignItems={"center"} marginTop={"20px"}>
                                        <Box width={"100%"}>
                                            <Input label={"Calcule o frete (CEP)"} name={"cep"} size={"small"} />
                                        </Box>
                                        <Box
                                            ml={1}
                                            width="min-content"
                                            sx={{
                                                borderColor: theme.palette.primary.main,
                                                borderStyle: "solid",
                                                borderWidth: "0.1em",
                                                borderRadius: "10%",
                                            }}
                                            display="flex"
                                            alignItems="center"
                                            padding="0.1em">
                                            <IconButton size="small" color="primary">
                                                <SearchIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>

                    </GenericCard>
                </Box>

            </Box>

            <Footer />
        </Box>
    </div>;
};

export default ProductPage;
