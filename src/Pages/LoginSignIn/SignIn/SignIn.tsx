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
import SimpleNavbar from "../SimpleNavbar";
import { FormControl } from "@mui/material";
import { useNavigate } from "react-router";
import CButton from "@/components/Button/Button";
import { Link } from "react-router-dom";

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

    const [currency, setCurrency] = React.useState("BRL");

    const handleChange = (event: any) => {
        setCurrency(event.target.value);
    };

    const [cpfValue, setCpfValue] = React.useState("");
    const [cpfValid, setCpfValid] = React.useState(true);
    const handleCpfValidation = (e: any) => {
        const regex = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}");
        setCpfValid(regex.test(e.target.value));
        setCpfValue(e.target.value);
    };


    const [telValue, setTelValue] = React.useState("");
    const [telValid, setTelValid] = React.useState(true);
    const handleTelValidation = (e: any) => {
        const regex = new RegExp("[0-9]{11}");
        setTelValid(regex.test(e.target.value));
        setTelValue(e.target.value);
    };


    const [cepValue, setCepValue] = React.useState("");
    const [cepValid, setCepValid] = React.useState(true);
    const handleCepValidation = (e: any) => {
        const regex = new RegExp("[0-9]{5}-[0-9]{3}");
        setCepValid(regex.test(e.target.value));
        setCepValue(e.target.value);
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
                                        required
                                        label="CPF"
                                        name={"cpf"}
                                        inputProps={{ maxlength: "14" }}
                                        value={cpfValue}
                                        error={!cpfValid}
                                        placeholder={"000.000.000-00"}
                                        onChange={(e) => handleCpfValidation(e)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Telefone Celular"
                                        name={"telefone"}
                                        inputProps={{ maxlength: "11" }}
                                        value={telValue}
                                        error={!telValid}
                                        placeholder={"Apenas números"}
                                        onChange={(e) => handleTelValidation(e)}
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
                                        name={"cep"}
                                        inputProps={{ maxlength: "9" }}
                                        value={cepValue}
                                        error={!cepValid}
                                        placeholder={"00000-000"}
                                        onChange={(e) => handleCepValidation(e)}
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
                            <Box my={2}>
                                <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                                    <Typography variant="body2">Já Possui conta? Entrar</Typography>
                                </Link>
                            </Box>
                            <CButton size="large" type="submit">
                                Realizar Cadastro
                            </CButton>
                        </FormControl>
                    </Box>
                </GenericCard>
            </Box >

        </>
    );
};

export default SignIn;