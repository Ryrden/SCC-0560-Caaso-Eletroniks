import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@/components/Button/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@/components/Input/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, withStyles } from "@mui/material/styles";
import GenericCard from "@/components/GenericCard/GenericCard";

const theme = createTheme();

export default function SignIn() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" color="#131313">
                <CssBaseline />
                <GenericCard>
                    <Box id="box"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h3" color={"#FFFFFF"}>
                            Entrar
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate sx={{ mt: 1 }}
                            width={"100%"}
                            padding={"30px"}
                        >
                            <TextField
                                label="CPF ou Email"
                                name={"account"}
                            />
                            <Box
                                padding={"9px"}
                            />
                            <TextField
                                label="Senha"
                                type="password"
                                name={"password"}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox value="remember" style={{ color: "#FFFFFF" }} />
                                }
                                style={{ color: "#FFFFFF" }}
                                label="Lembre de mim"
                            />
                            <Button
                                btntype="secondary"
                            >
                                Sign In
                            </Button>
                            <Grid container >
                                <Grid item xs display="flex" justifyContent="flex-end" marginTop={"15px"}>
                                    <Link href="#" variant="body2" color={"#FFFFFF"} text-decoration={"none"}>
                                        Esqueceu a senha?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </GenericCard>
            </Container>
        </ThemeProvider>
    );
}