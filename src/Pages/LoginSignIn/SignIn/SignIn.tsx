import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@/components/Input/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GenericCard from "@/components/GenericCard/GenericCard";
import Divider from "@mui/material/Divider";
import Button from "@/components/Button/Button";
import SimpleNavbar from "../SimpleNavbar";
import { FormControl } from "@mui/material";
import { useNavigate } from "react-router";

const SignIn = () => {
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get("name"),
            birthDate: data.get("date"),
            cpf: data.get("cpf"),
            telefone: data.get("telefone"),
            email: data.get("email"),
            password: data.get("password"),
            cep: data.get("cep"),
            street: data.get("street"),
            number: data.get("number"),
            city: data.get("city"),
            state: data.get("uf"),
            complement: data.get("complement"),
        });
        navigate("/");
    };

    return (
        <>
            <SimpleNavbar />
            <CssBaseline />
            <Box id="box"
                sx={{ width: { xs: "90%", sm: "70%", md: "40%" } }}
                marginX={"auto"}
            >
                <GenericCard>
                    <Box
                        sx={{ mt: 1 }}
                        width={"100%"}
                        padding={"30px"}
                    >
                        <FormControl
                            component="form"
                            onSubmit={handleSubmit}>
                            <Typography component="h1" fontWeight={"bold"} variant="h4" color={"#FFFFFF"} marginBottom={"40px"} textAlign={"center"}>
                                Cadastrar-se
                            </Typography>
                            <Grid container spacing={3} marginBottom={"20px"}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Nome Completo"
                                        name={"name"}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Data de Nascimento"
                                        name={"date"}
                                        required
                                        type={"date"}
                                        focused
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={3} marginBottom={"20px"}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="CPF"
                                        name={"cpf"}
                                        type={"number"}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Telefone Celular"
                                        name={"telefone"}
                                        type={"telefone"}
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid item xs={12} md={12} marginBottom={"20px"}>
                                    <TextField
                                        label="E-mail"
                                        name={"email"}
                                        type={"email"}
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={3} marginBottom={"20px"}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Crie sua Senha"
                                        type="password"
                                        name={"senha"}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Confirme sua Senha"
                                        type="password"
                                        name={"senhaConfirmacao"}
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Divider>
                            </Divider>

                            <Typography component="h3" fontWeight={"bold"} variant="h5" color={"#FFFFFF"} marginTop={"20px"} marginBottom={"20px"} textAlign="start">
                                Endereço
                            </Typography>

                            <Grid container spacing={3} marginBottom={"20px"}>
                                <Grid item xs={12} md={12}>
                                    <TextField
                                        label="CEP"
                                        type="number"
                                        name={"cep"}
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={3} marginBottom={"20px"}>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        label="Rua"
                                        name={"street"}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        label="Número"
                                        type="number"
                                        name={"number"}
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={3} marginBottom={"20px"}>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        label="Cidade"
                                        name={"city"}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        label="Estado"
                                        name={"uf"}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        label="Complemento"
                                        name={"complement"}
                                    />
                                </Grid>
                            </Grid>

                            <Box
                                sx={{
                                    color: "white",
                                    textAlign: "end"
                                }}
                            >
                                Li e estou de acordo com as políticas da empresa e políticas de privacidade. *
                                <FormControlLabel
                                    control={
                                        <Checkbox value="remember" style={{ color: "#FFFFFF" }} />
                                    }
                                    style={{ color: "#FFFFFF" }}
                                    label="Eu concordo"
                                />
                            </Box>

                            <Button size="large" type="submit">
                                Realizar Cadastro
                            </Button>
                        </FormControl>
                    </Box>
                </GenericCard>
            </Box >

        </>
    );
};

export default SignIn;