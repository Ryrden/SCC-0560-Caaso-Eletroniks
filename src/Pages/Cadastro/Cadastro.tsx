import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@/components/Input/Input";
import DateField from "@/components/Input/DateInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GenericCard from "@/components/GenericCard/GenericCard";
import Divider from "@mui/material/Divider";
import Button from "@/components/Button/Button";

export default function Registration() {
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
    };

    return (
        <>
            <CssBaseline/>
            <Box id="box"
                sx={{width: {xs: "90%", sm: "70%", md: "40%"}}}
                marginX={"auto"}
                component="form"
                onSubmit={handleSubmit}
            >
                <GenericCard>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate sx={{ mt: 1 }}
                        width={"100%"}
                        padding={"30px"}
                    >
                        <Typography component="h1" fontWeight={"bold"} variant="h4" color={"#FFFFFF"} marginBottom={"40px"} textAlign={"center"}>
                            Cadastrar-se
                        </Typography>
                        <Grid container spacing={3} marginBottom={"20px"}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Nome Completo"
                                    name={"name"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <DateField
                                    label="Data de Nascimento"
                                    name={"date"}
                                    required={true}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={3} marginBottom={"20px"}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="CPF"
                                    name={"cpf"}
                                    type={"number"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Telefone Celular"
                                    name={"telefone"}
                                    type={"telefone"}
                                    required={true}
                                />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={12} md={12} marginBottom={"20px"}>
                                <TextField
                                    label="E-mail"
                                    name={"email"}
                                    type={"email"}
                                    required={true}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={3} marginBottom={"20px"}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Crie sua Senha"
                                    type="password"
                                    name={"senha"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Confirme sua Senha"
                                    type="password"
                                    name={"senhaConfirmacao"}
                                    required={true}
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
                                    required={true}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={3} marginBottom={"20px"}>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    label="Rua"
                                    name={"street"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Número"
                                    type="number"
                                    name={"number"}
                                    required={true}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={3} marginBottom={"20px"}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Cidade"
                                    name={"city"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Estado"
                                    name={"uf"}
                                    required={true}
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

                        <Button size="large">
                            Realizar Cadastro
                        </Button>

                    </Box>
                </GenericCard>
            </Box>

        </>
    );
}