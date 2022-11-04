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
import CButton from "@/components/Button/Button";

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
        <>
            <CssBaseline />
            <Box id="box"
                sx={{width: {xs: "90%", sm: "70%", md: "40%"}}}
                marginX={"auto"}
            >
                <GenericCard>


                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate sx={{ mt: 1 }}
                        width={"100%"}
                        padding={"30px"}
                    >
                        <Typography component="h1" fontWeight={"bold"} variant="h4" color={"#FFFFFF"} marginBottom={"40px"} mt={2}>
                            Cadastrar-se
                        </Typography>
                        <Box display={"flex"} gap={"20px"} marginBottom={"20px"} sx={{ flexDirection: {xs: "column", sm: "row"} }}>
                            <Box width={"100%"}>
                                <TextField  
                                    label="Nome Completo"
                                    name={"name"}
                                    required={true}
                                />
                            </Box>
                            <Box width={"100%"}>
                                {/* TODO: use date picker from mui-x */}
                                <TextField
                                    label="Data de Nascimento"
                                    name={"date"}
                                    type={"date"}
                                    required={true}
                                />
                            </Box>
                        </Box>

                        <Box display={"flex"} gap={"20px"} marginBottom={"20px"}>
                            <Box width={"100%"}>
                                <TextField
                                    label="CPF"
                                    name={"cpf"}
                                    type={"number"}
                                    required={true}
                                />
                            </Box>
                            <Box width={"100%"}>
                                <TextField
                                    label="Telefone Celular"
                                    name={"telefone"}
                                    type={"telefone"}
                                    required={true}
                                />
                            </Box>
                        </Box>

                        <Box width={"100%"} marginBottom={"20px"}>
                            <TextField
                                label="E-mail"
                                name={"email"}
                                type={"email"}
                                required={true}
                            />
                        </Box>



                        <Box display={"flex"} gap={"20px"} marginBottom={"20px"} sx={{ flexDirection: {xs: "column", lg: "row"} }}>
                            <Box width={"100%"}>
                                <TextField
                                    label="Crie sua Senha"
                                    type="password"
                                    name={"senha"}
                                    required={true}
                                />
                            </Box>
                            <Box width={"100%"}>
                                <TextField
                                    label="Confirme sua Senha"
                                    type="password"
                                    name={"senhaConfirmacao"}
                                    required={true}
                                />
                            </Box>
                        </Box>

                        <Divider>
                        </Divider>

                        <Typography component="h3" fontWeight={"bold"} variant="h5" color={"#FFFFFF"} marginTop={"20px"} marginBottom={"20px"} textAlign="start">
                            Endereço
                        </Typography>

                        <Box width={"100%"} marginBottom={"20px"}>
                            <TextField
                                label="Rua"
                                name={"rua"}
                                required={true}
                            />
                        </Box>


                        <Box display={"flex"} gap={"20px"} marginBottom={"20px"}>
                            <Box width={"100%"}>
                                <TextField
                                    label="CEP"
                                    type="number"
                                    name={"cep"}
                                    required={true}
                                />
                            </Box>
                            <Box width={"100%"}>
                                <TextField
                                    label="Número"
                                    type="number"
                                    name={"numero"}
                                    required={true}
                                />
                            </Box>
                        </Box>




                        <Box display={"flex"} gap={"20px"} marginBottom={"20px"} sx={{ flexDirection: {xs: "column", sm: "row"} }} >
                            <Box width={"100%"}>
                                <TextField
                                    label="Cidade"
                                    name={"cidade"}
                                    required={true}
                                />
                            </Box>
                            <Box width={"100%"}>
                                <TextField
                                    label="Estado"
                                    name={"uf"}
                                    required={true}
                                />
                            </Box>
                            <Box width={"100%"}>
                                <TextField
                                    label="Complemento"
                                    name={"complemento"}
                                />
                            </Box>
                        </Box>

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

                        <CButton size="large">
                            Realizar Cadastro
                        </CButton>

                    </Box>
                </GenericCard>
            </Box>

        </>
    );
}