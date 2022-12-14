import React from "react";
import Button from "@/components/Button/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@/components/Input/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GenericCard from "@/components/GenericCard/GenericCard";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import SimpleNavbar from "../SimpleNavbar";
import { useNavigate } from "react-router";

export default function SignIn() {
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("account"),
            password: data.get("password"),
        });
        navigate("/");
    };

    return (
        <>
            <SimpleNavbar />
            <Container component="main" maxWidth="xs" color="#131313">
                <CssBaseline />
                <GenericCard>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" fontWeight={"bold"} variant="h3" color={"#FFFFFF"} mt={2}>
                            Entrar
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                            width={"100%"}
                            padding={"30px"}
                        >
                            <TextField
                                label="CPF ou Email"
                                name={"account"}
                                required={true} />
                            <Box
                                padding={"9px"} />
                            <TextField
                                label="Senha"
                                type="password"
                                name={"password"}
                                required={true} />
                            <FormControlLabel
                                control={<Checkbox value="remember" style={{ color: "#FFFFFF" }} />}
                                style={{ color: "#FFFFFF", margin: "5px 0px" }}
                                label="Lembre de mim" />
                            <Button type="submit">
                                Entrar
                            </Button>
                            <Grid container>
                                <Grid container>
                                    <Box width="100%" display="flex" justifyContent="space-between">
                                        <Grid item xs={6} marginTop={"15px"}>
                                            <Link to="/signin" style={{ textDecoration: "none", color: "white" }}>
                                                <Typography variant="body2">Cadastre-se</Typography>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={6} marginTop={"15px"}>
                                            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                                                <Typography variant="body2" align="right">Esqueceu a senha?</Typography>
                                            </Link>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider>
                                        <Typography color={"#FFFFFF"}>
                                            OU
                                        </Typography>
                                    </Divider>
                                </Grid>
                            </Grid>
                            <Grid container color={"#FFFFFF"} display="flex" justifySelf={"center"} justifyItems={"center"}>
                                <Grid item xs={12} display={"inline-flex"} gap={"10px"} marginTop={"18px"}>
                                    <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>Google</Button>
                                    <Button variant="outlined" fullWidth startIcon={<FacebookIcon />}>facebook</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </GenericCard>
            </Container>
        </>
    );
}