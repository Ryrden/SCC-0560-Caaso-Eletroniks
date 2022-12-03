import React from "react";
import Button from "@/components/Button/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@/components/Input/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GenericCard from "@/components/GenericCard/GenericCard";
import Divider from "@mui/material/Divider";
import DesktopDatePicker from "@mui/x-date-pickers/DesktopDatePicker";

export default function Registration() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <Container maxWidth="xs" color="#131313">
            <CssBaseline />
            <GenericCard>
                <Box id="box"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" fontWeight={"bold"} variant="h4" color={"#FFFFFF"} mt={2}>
                        Cadastrar-se
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate sx={{ mt: 1 }}
                        width={"100%"}
                        padding={"30px"}
                    >
                        <Grid container gap={"20px"} marginBottom={"20px"}>
                            <Grid item md={5.6}>
                                <TextField
                                    label="Nome Completo"
                                    name={"name"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item md={5.6}>
                                <TextField
                                    label="Data de Nascimento"
                                    name={"date"}
                                    type={"date"}
                                    required={true}
                                />
                            </Grid>
                        </Grid>

                        <Grid container gap={"20px"} marginBottom={"20px"}>
                            <Grid item md={5.6}>
                                <TextField
                                    label="CPF"
                                    name={"cpf"}
                                    type={"number"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item md={5.6}>
                                <TextField
                                    label="Telefone Celular"
                                    name={"telefone"}
                                    type={"telefone"}
                                    required={true}
                                />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item md={12} marginBottom={"20px"}>
                                <TextField
                                    label="E-mail"
                                    name={"email"}
                                    type={"email"}
                                    required={true}
                                />
                            </Grid>
                        </Grid>

                        <Grid container gap={"20px"} marginBottom={"20px"}>
                            <Grid item md={5.6}>
                                <TextField
                                    label="Crie sua Senha"
                                    type="password"
                                    name={"senha"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item md={5.6}>
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

                        <Grid container gap={"20px"} marginBottom={"20px"}>
                            <Grid item md={12}>
                                <TextField
                                    label="Rua"
                                    name={"rua"}
                                    required={true}
                                />
                            </Grid>
                        </Grid>

                        <Grid container gap={"20px"} marginBottom={"20px"}>
                            <Grid item md={5.6}>
                                <TextField
                                    label="CEP"
                                    type="number"
                                    name={"cep"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item md={5.6}>
                                <TextField
                                    label="Número"
                                    type="number"
                                    name={"numero"}
                                    required={true}
                                />
                            </Grid>
                        </Grid>

                        <Grid container gap={"20px"} marginBottom={"20px"}>
                            <Grid item md={3.2}>
                                <TextField
                                    label="Cidade"
                                    name={"cidade"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item md={1.7}>
                                <TextField
                                    label="Estado"
                                    name={"uf"}
                                    required={true}
                                />
                            </Grid>
                            <Grid item md={5.6}>
                                <TextField
                                    label="Complemento"
                                    name={"complemento"}
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

                        <Button>
                            Realizar Cadastro
                        </Button>

                    </Box>
                </Box>
            </GenericCard>
        </Container>
    );
}