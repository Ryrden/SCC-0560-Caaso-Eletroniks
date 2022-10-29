import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import footerBackground from "@/assets/imgs/footerBackground.svg";

import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PixIcon from "@mui/icons-material/Pix";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoneyIcon from "@mui/icons-material/Money";

import siteSeguro from "@/assets/imgs/siteSeguro.svg";
import googleSiteSeguro from "@/assets/imgs/googleSiteSeguro.svg";
import pix from "@/assets/imgs/pix.svg";
import boleto from "@/assets/imgs/boleto.svg";
import cartoes from "@/assets/imgs/cartoes.svg";
import cc from "@/assets/imgs/cc.svg";

import { Button, TextField, Typography, useTheme } from "@mui/material";

export default function Footer() {
    const theme = useTheme();
    return (
        <footer>
            <Container
                sx={{
                    minWidth: "100%",
                    height: "40px",
                    background: `linear-gradient(90deg, #FFFFFF -0.35%, ${theme.palette.primary.main} -0.34%, #3B1A47 100%);`
                }} />
            <Box
                sx={{
                    display: "grid",
                    gridAutoFlow: { xs: "row", md: "column" },
                    gridTemplateColumns: { md: "2fr 1fr" },
                    textAlign: { xs: "center", md: "start" },
                }}
                // px={{ xs: 3, sm: 10 }}
                /* py={{ xs: 5, sm: 10 }}
                pl={{ xs: 3, sm: 10 }} */
                width={"100%"}
                color="white"
            >
                <Container sx={{
                    backgroundColor: "black",
                    padding: { xs: 10 },
                }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} >
                            <Box mb={5}>
                                <Typography variant="h6" sx={{
                                    textDecoration: "underline",
                                    textUnderlineOffset: "0px",
                                    textDecorationColor: "yellow"
                                }}>
                                    Departamento
                                </Typography>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    Computadores
                                </Link>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    Perifericos
                                </Link>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    Hardware
                                </Link>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    Eletrônicos
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box mb={5}>
                                <Typography variant="h6" sx={{
                                    textDecoration: "underline",
                                    textUnderlineOffset: "0px",
                                    textDecorationColor: "yellow"
                                }}>
                                    Institucional
                                </Typography>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    O CAASO Eletroniks
                                </Link>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    Formas de pagamento e envio
                                </Link>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    Garantia, trocas e devoluções
                                </Link>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    Política de privacidade
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box mb={5}>
                                <Typography variant="h6" sx={{
                                    textDecoration: "underline",
                                    textUnderlineOffset: "0px",
                                    textDecorationColor: "yellow"
                                }}>
                                    Meu Perfil
                                </Typography>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    Meus Dados
                                </Link>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    Meus pedidos
                                </Link>
                            </Box>
                            <Box mb={4}>
                                <Link href="/" color="inherit">
                                    Sair
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Container sx={{
                    backgroundImage: `url(${footerBackground})`,
                    padding: { xs: 10 },
                    textAlign: { xs: "center", md: "start" },
                }}>
                    <Box>
                        <Typography variant="h5" color="black" fontWeight="bold" mb={2}>
                            Entre em Contato Conosco
                        </Typography>

                        <Grid container display="flex" alignItems="center" justifyContent="center" mb={2}>
                            <Grid item lg={8}>
                                <TextField id="outlined" label="Email" variant="outlined" sx={{
                                    backgroundColor: "white"
                                }} />
                            </Grid>

                            <Grid item lg={4}>
                                <Button variant="contained">Enviar</Button>
                            </Grid>
                        </Grid>

                        <Typography variant="h5" color="black" fontWeight="bold" mb={2}>
                            Mídias
                        </Typography>

                        <Grid container spacing={4} justifyContent="center">
                            <Grid item md={6}>
                                <Box display="flex" alignItems="center">
                                    <WhatsAppIcon sx={{ color: "black" }} />
                                    <Typography variant="h6" sx={{
                                        textDecoration: "underline",
                                        color: "black",
                                        marginLeft: "0.2em"
                                    }}>
                                        Whatsapp
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box display="flex" alignItems="center">
                                    <FacebookIcon sx={{ color: "black" }} />
                                    <Typography variant="h6" sx={{
                                        textDecoration: "underline",
                                        color: "black",
                                        marginLeft: "0.2em"
                                    }}>
                                        Facebook
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box display="flex" alignItems="center">
                                    <InstagramIcon sx={{ color: "black" }} />
                                    <Typography variant="h6" sx={{
                                        textDecoration: "underline",
                                        color: "black",
                                        marginLeft: "0.2em"
                                    }}>
                                        Instagram
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box display="flex" alignItems="center">
                                    <GitHubIcon sx={{ color: "black" }} />
                                    <Typography variant="h6" sx={{
                                        textDecoration: "underline",
                                        color: "black",
                                        marginLeft: "0.2em"
                                    }}>
                                        Github
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Container>
            </Box>
            <Container
                sx={{
                    minWidth: "100%",
                    height: "40px",
                    background: `linear-gradient(90deg, #FFFFFF -0.35%, ${theme.palette.primary.main} -0.34%, #3B1A47 100%);`
                }} />
            <Container sx={{
                minWidth: "100%",
                backgroundColor: "#131313", //Preto não completamente preto
                color: "white",
                padding: 3,
                boxSizing: "border-box",
                textAlign: { xs: "center", md: "left" },
            }}>
                <Typography variant="h6" fontWeight="bold" mb={2} ml={{xs: 0, md: 7}}>
                    Pagamento Via
                </Typography>
                <Container sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    minWidth: "100%",
                    justifyContent: "space-between",
                    paddingX: { xs: 0, md: 10 },
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: { xs: "center", md: "flex-start" },
                        marginBottom: { xs: 4, md: 0 }
                    }}>
                        <Box display="flex" justifyContent="center">
                            <Box display="flex" alignItems="center">
                                <img src={pix} alt="" />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <img src={boleto} alt="" />
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <img src={cartoes} alt="" />
                        </Box>
                    </Box>
                    <Box>
                        <img src={siteSeguro} alt="" />
                        <img src={googleSiteSeguro} alt="" />
                    </Box>
                </Container>
            </Container>
            <Container
                sx={{
                    minWidth: "100%",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "black"
                }} >
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <img src={cc} height="20px" alt="" />
                    <Typography textAlign="center" variant="h6" fontWeight="bold" color="white" my={2} ml={1}>
                        2022 CAASO Eletroniks. Alguns direitos reservados.
                    </Typography>
                </Box>
            </Container>
            {/* <Box textAlign="center" color="white" bgcolor="black" pb={{ xs: 5, sm: 3 }}>
                    Alguns Direitos Reservados &copy; {new Date().getFullYear()}
                </Box> */}
        </footer>
    );
}