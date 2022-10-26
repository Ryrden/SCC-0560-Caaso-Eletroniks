import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { TextField, Typography, useTheme } from "@mui/material";

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
                    display: "inline-grid", gridTemplateColumns: "2fr 1fr"
                }}
                // px={{ xs: 3, sm: 10 }}
                /* py={{ xs: 5, sm: 10 }}
                pl={{ xs: 3, sm: 10 }} */
                width={"100%"}
                bgcolor="text.secondary"
                color="white"
            >
                <Container sx={{
                    backgroundColor: "black",
                    padding: { xs: "3 5", sm: 10 }
                }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} >
                            <Box borderBottom={3}>Departamento</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Computadores
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Perifericos
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Hardware
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={3}>Account</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Register
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={3}>Messages</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Backup
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    History
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Roll
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Container sx={{
                    backgroundColor: "white",
                    padding: { xs: "3 5", sm: 10 }
                }}>
                    <Box textAlign="center" bgcolor="white">
                        <Typography variant="h5" color="black" align="center">
                            Entre em Contato Conosco
                        </Typography>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />

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