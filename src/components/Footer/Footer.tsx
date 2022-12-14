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

import siteSeguro from "@/assets/imgs/siteSeguro.svg";
import googleSiteSeguro from "@/assets/imgs/googleSiteSeguro.svg";
import pix from "@/assets/imgs/pix.svg";
import boleto from "@/assets/imgs/boleto.svg";
import cartoes from "@/assets/imgs/cartoes.svg";
import cc from "@/assets/imgs/cc.svg";

import { Button, TextField, Typography, useTheme } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer() {
    const theme = useTheme();
    return (
        <footer>
            <Container
                sx={{
                    minWidth: "100%",
                    height: "25px",
                    background: `linear-gradient(90deg, #FFFFFF -0.35%, ${theme.palette.primary.main} -0.34%, #3B1A47 100%);`
                }} />
            <Box
                sx={{
                    display: "grid",
                    gridAutoFlow: { xs: "row", md: "column" },
                    gridTemplateColumns: { md: "2fr 1fr" },
                    textAlign: { xs: "center", md: "start" },
                }}
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
                                <Typography component="span" variant="h6" borderBottom={3} borderColor={"primary.main"}>
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
                                <Link href="https://www.youtube.com/watch?v=Sn8QTjWw1o8&ab_channel=nscream" color="inherit">
                                    Hardware
                                </Link>
                            </Box>
                            <Box mb={4}>
                                <Link href="https://www.youtube.com/watch?v=Sn8QTjWw1o8&ab_channel=nscream" color="inherit">
                                    Eletrônicos
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box mb={5}>
                                <Typography component="span" variant="h6" borderBottom={3} borderColor={"primary.main"}>
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
                            <Box mb={4}>
                                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" color="inherit">
                                    Ajuda
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box mb={5}>
                                <Typography component="span" variant="h6" borderBottom={3} borderColor={"primary.main"}>
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
                    backgroundSize: "cover",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: { xs: 2, lg: 10 },
                    paddingRight: { xs: 2, lg: 10 },
                    textAlign: { xs: "center", md: "start" }
                }}>
                    <Box>
                        <Typography variant="h5" color="black" fontWeight="bold" mb={2}>
                            Entre em Contato Conosco
                        </Typography>

                        <Grid container display="flex" alignItems="center" justifyContent="center" mb={2}>
                            <Grid item lg={8}
                                sx={{
                                    width: { xs: "70%" }
                                }}
                            >
                                <TextField
                                    id="outlined"
                                    label=""
                                    variant="outlined"
                                    placeholder="seu@email.com"
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MailOutlineIcon color="primary" />
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={{
                                        backgroundColor: "white",
                                        width: "100%",
                                    }} />
                            </Grid>

                            <Grid item lg={4} >
                                <Button variant="contained">Enviar</Button>
                            </Grid>
                        </Grid>

                        <Typography variant="h5" color="black" fontWeight="bold" mb={2}>
                            Mídias
                        </Typography>

                        <Grid container spacing={4} justifyContent="center">
                            <Grid item md={6}>
                                <Link href="/">
                                    <Box display="flex" alignItems="center">
                                        <WhatsAppIcon sx={{ color: "black" }} />
                                        <Typography variant="h6" sx={{
                                            textDecoration: "underline",
                                            color: "black",
                                            marginLeft: "0.2em",
                                            display: "inline"
                                        }}>
                                            Whatsapp
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item md={6}>
                                <Link href="/">
                                    <Box display="flex" alignItems="center">
                                        <FacebookIcon sx={{ color: "black" }} />
                                        <Typography variant="h6" sx={{
                                            textDecoration: "underline",
                                            color: "black",
                                            marginLeft: "0.2em",
                                            display: "inline"
                                        }}>
                                            Facebook
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item md={6}>
                                <Link href="/">
                                    <Box display="flex" alignItems="center">
                                        <InstagramIcon sx={{ color: "black" }} />
                                        <Typography variant="h6" sx={{
                                            textDecoration: "underline",
                                            color: "black",
                                            marginLeft: "0.2em",
                                            display: "inline"
                                        }}>
                                            Instagram
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item md={6}>
                                <Link href="https://github.com/Ryrden/SCC-0560-Caaso-Eletroniks">
                                    <Box display="flex" alignItems="center">
                                        <GitHubIcon sx={{ color: "black" }} />
                                        <Typography variant="h6" sx={{
                                            textDecoration: "underline",
                                            color: "black",
                                            marginLeft: "0.2em",
                                            display: "inline"
                                        }}>
                                            Github
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid >
                        </Grid >
                    </Box >

                </Container >
            </Box >
            <Container
                sx={{
                    minWidth: "100%",
                    height: "25px",
                    background: `linear-gradient(90deg, #FFFFFF -0.35%, ${theme.palette.primary.main} -0.34%, #3B1A47 100%);`
                }} />
            <Container sx={{
                minWidth: "100%",
                //degrade do cinza para preto
                background: "linear-gradient(180deg, rgba(90,90,90,1) 0%, rgba(45,45,45,1) 50%, rgba(0,0,0,1) 100%)",
                color: "white",
                padding: 3,
                boxSizing: "border-box",
                textAlign: { xs: "center", md: "left" },
            }}>
                <Typography variant="h6" fontWeight="bold" mb={2} ml={{ xs: 0, md: 7 }}>
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
                        marginBottom: { xs: 4, md: 0 },
                    }}>
                        <Box display="flex" justifyContent="center">
                            <Box display="flex" alignItems="center">
                                <img src={pix} alt="Logo do método de pagamento Pix" />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <img src={boleto} alt="Logo do método de pagamento Boleto" />
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <img src={cartoes} height="45em" alt="Logo das marcas de cartão: MasterCard, Visa, American Express, Elo,Hipercard e Dinners Club Internacional" />
                        </Box>
                    </Box>
                    <Box>
                        <img src={siteSeguro} alt="Logo Site Seguro, Possui Site Seguro SSL" />
                        <img src={googleSiteSeguro} alt="Logo Google Site Seguro" />
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
                    background: "rgba(0,0,0,1)"
                }} >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <img src={cc} height="20px" alt="Licença Creative Commons, Todo o site é de uso livre desde que citado a fonte" />
                    <Typography textAlign="center" variant="body1" fontWeight="bold" color="white" bgcolor="black" ml={1}>
                        2022 CAASO Eletroniks. Alguns direitos reservados.
                    </Typography>
                </Box>
            </Container>
        </footer >
    );
}