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
                    textAlign: { xs: "center", md: "center" },
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
            {/* <Box textAlign="center" color="white" bgcolor="black" pb={{ xs: 5, sm: 3 }}>
                Alguns Direitos Reservados &copy; {new Date().getFullYear()}
            </Box> */}
            <Container
                sx={{
                    minWidth: "100%",
                    height: "40px",
                    background: `linear-gradient(90deg, #FFFFFF -0.35%, ${theme.palette.primary.main} -0.34%, #3B1A47 100%);`
                }} />
        </footer>
    );
}