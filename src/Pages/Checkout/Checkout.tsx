import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Divider from "@mui/material/Divider";
import { Box, CssBaseline, FormControl, Grid, MenuItem, Typography, useTheme } from "@mui/material";
import GenericCard from "@/components/GenericCard/GenericCard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PixIcon from "@mui/icons-material/Pix";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Success from "../Success/Success";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useNavigate, useParams } from "react-router";



const currencies = [
    {
        value: "1x",
        label: "À vista R$ 5.000,00 - Total R$ 5.000,00",
    },
    {
        value: "2x",
        label: "2 x R$ 2.500,00 Sem Juros - Total R$ 5.000,00",
    },
    {
        value: "3x",
        label: "3 x R$ 1.666,66 Sem Juros - Total R$ 5.000,00",
    },
    {
        value: "4x",
        label: "4 x R$ 1.250,00 Sem Juros - Total R$ 5.000,00",
    },
    {
        value: "5x",
        label: "5 x R$ 1.000,00 Sem Juros - Total R$ 5.000,00",
    },
    {
        value: "6x",
        label: "6 x R$ 833,33 Sem Juros - Total R$ 5.000,00",
    },
    {
        value: "7x",
        label: "7 x R$ 714,28 Sem Juros - Total R$ 5.000,00",
    },
    {
        value: "8x",
        label: "8 x R$ 625,00 Sem Juros - Total R$ 5.000,00",
    },
    {
        value: "9x",
        label: "9 x R$ 555,55 Sem Juros - Total R$ 5.000,00",
    },
    {
        value: "10x",
        label: "10 x R$ 500,00 Sem Juros - Total R$ 5.000,00",
    },
];


const Checkout = () => {

    const theme = useTheme();

    const [currency, setCurrency] = React.useState("BRL");

    const handleChange = (event: any) => {
        setCurrency(event.target.value);
    };
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        navigate("/success");
    };

    const [alignment, setAlignment] = React.useState("cartao");
    const handleChange2 = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    const [alignment, setAlignment] = React.useState("cartao");

    const handleChange2 = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    const [dataValue, setDataValue] = React.useState("");
    const [dataValid, setDataValid] = React.useState(true);
    const handleDataValidation = (e: any) => {
        const regex = new RegExp("(0[1-9]|1[0-9]|2[0-9]|3[0-1])[- | /](0[1-9]|1[0-2])[- | /]([0-9]{4})");
        setDataValid(regex.test(e.target.value));
        setDataValue(e.target.value);
    };

    const [dataValidadeValue, setDataValidadeValue] = React.useState("");
    const [dataValidadeValid, setDataValidadeValid] = React.useState(true);
    const handleDataValidadeValidation = (e: any) => {
        const regex = new RegExp("(0[1-9]|1[0-9]|2[0-9]|3[0-1])[- | /](0[1-9]|1[0-2])[- | /]([0-9]{4})");
        setDataValidadeValid(regex.test(e.target.value));
        setDataValidadeValue(e.target.value);
    };

    const [cpfValue, setCpfValue] = React.useState("");
    const [cpfValid, setCpfValid] = React.useState(true);
    const handleCpfValidation = (e: any) => {
        const regex = new RegExp("^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$");
        setCpfValid(regex.test(e.target.value));
        setCpfValue(e.target.value);
    };

    const breadcrumbs = [
        {
            to: "/",
            label: "Página Inicial",
            current: false
        },
        {
            to: "/carrinho",
            label: "Carrinho",
            current: false
        },
        {
            to: "/checkout",
            label: "Pagamento",
            current: true
        },
        {
            to: "/checkout",
            label: "Compra Concluída",
            current: false
        },
    ];

    return (
        <div>
            <Box>
                <CssBaseline />
                <NavBar />
                <Box
                    maxWidth={"1160px"}
                    marginX={"auto"}
                    paddingX={"30px"}
                    paddingTop={"46px"}
                    paddingBottom={"90px"}
                    sx={{
                        display: "grid",
                        gridAutoFlow: { xs: "row", md: "column" },
                        gridTemplateColumns: { md: "1fr 2fr" },
                        gridTemplateAreas: `"breadcrumb breadcrumb"
                        "pagamento dados-cartao"`,
                    }}
                >
                    <Box sx={{ gridArea: "breadcrumb" }}>
                        <Breadcrumb
                            navigators={breadcrumbs}
                        />
                    </Box>
                    <Grid container
                        gap={"33px"}
                        width={"100%"}
                        height={"50%"}
                        sx={{ justifyContent: "center" }}
                        marginTop={"50%"}
                    >
                        <Box id="box-FormaPagamento"
                            style={{ backgroundColor: "#292929" }}
                            sx={{
                                gridArea: "pagamento",
                                border: 2,
                                borderColor: "#1F1F1F",
                                borderRadius: 3,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                fontWeight={"bold"}
                                variant="h5"
                                align="left"
                                color={"#FFFFFF"}
                                m={4}
                                mb={1}
                            >
                                Forma de Pagamento
                            </Typography>
                            <Box
                                width={"100%"}
                            >
                                {/* //TODO: Colocar efeito de clicado depois */}
                                <ToggleButtonGroup
                                    orientation="vertical"
                                    sx={{
                                        backgroundColor: `${theme.palette.success.main}`,
                                        color: `${theme.palette.background.default}`,
                                        width: "90%",
                                        marginX: "5%",
                                        marginY: "30%",
                                    }}
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange2}
                                    aria-label="Platform"
                                >
                                    <ToggleButton
                                        value="cartao"
                                        sx={{
                                            backgroundColor: `${theme.palette.primary.main}`,
                                            color: `${theme.palette.background.default}`,
                                        }}
                                    >
                                        <ReceiptIcon />
                                        Cartão de Crédito
                                    </ToggleButton>

                                    <ToggleButton
                                        value="pix"
                                        sx={{
                                            backgroundColor: `${theme.palette.primary.main}`,
                                            color: `${theme.palette.background.default}`,
                                        }}
                                    >
                                        <PixIcon />
                                        Pix
                                    </ToggleButton>
                                    <ToggleButton
                                        value="boleto"
                                        sx={{
                                            backgroundColor: `${theme.palette.primary.main}`,
                                            color: `${theme.palette.background.default}`,
                                        }}
                                    >
                                        <ReceiptIcon />
                                        Boleto Bancário
                                    </ToggleButton>

                                </ToggleButtonGroup >

                            </Box >
                        </Box >
                    </Grid >

                    <Grid container
                        gap={"33px"}
                        width={"100%"}
                        height={"100%"}
                        sx={{ justifyContent: "center" }}
                        marginTop={"48px"}
                    >
                        <GenericCard>
                            <FormControl
                                component="form"
                                onSubmit={handleSubmit}>
                                <Box id="box-DadosCartão"
                                    width={"100%"}
                                    padding={"30px"}
                                    sx={{
                                        gridArea: "dados-cartao",
                                        width: 550,
                                        display: "grid",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        component="h1"
                                        fontWeight={"bold"}
                                        variant="h5"
                                        color={"#FFFFFF"}
                                        mb={5}
                                    >
                                        Dados do Titular do Cartão
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(2, 1fr)",
                                            gap: 2,
                                            gridTemplateRows: "auto",
                                            gridTemplateAreas: `"nome nome"
                                        "cpf data-nasc"`,
                                        }}
                                    >
                                        <Box sx={{ gridArea: "nome" }}>
                                            <Input
                                                required
                                                label="Nome impresso no cartão"
                                                name={"nome"}
                                            />
                                        </Box>

                                        <Box sx={{ gridArea: "cpf" }}>
                                            <Input
                                                required
                                                label="CPF"
                                                name={"cpf"}
                                                value={cpfValue}
                                                error={!cpfValid}
                                                onChange={(e) => handleCpfValidation(e)}
                                            />
                                        </Box>

                                        <Box sx={{ gridArea: "data-nasc" }}>
                                            <Input
                                                required
                                                label="Data de nascimento"
                                                name={"data-nasc"}
                                                value={dataValue}
                                                error={!dataValid}
                                                onChange={(e) => handleDataValidation(e)}
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                <Box
                                    width={"100%"}
                                    padding={"30px"}
                                >
                                    <Divider></Divider>
                                </Box>

                                <Box id="box-DadosCartão"
                                    width={"100%"}
                                    padding={"30px"}
                                    sx={{
                                        width: 550,
                                        display: "grid",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        component="h1"
                                        fontWeight={"bold"}
                                        variant="h5"
                                        color={"#FFFFFF"}
                                        mb={5}>
                                        Dados de Pagamento
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(2, 1fr)",
                                            gap: 2,
                                            gridTemplateRows: "auto",
                                            gridTemplateAreas: `"num-cartao num-cartao"
                                                                "data-val cvv"
                                                                "forma-pagam forma-pagam"
                                                                "finalizar finalizar"`,
                                        }}
                                    >
                                        <Box sx={{ gridArea: "num-cartao" }}>
                                            <Input
                                                required
                                                label="Número do cartão"
                                                name={"num-cartao"}
                                            //onChange={(e) => handleCreditCardValidation(e)}
                                            />
                                        </Box>

                                        <Box sx={{ gridArea: "data-val" }}>
                                            <Input
                                                required
                                                label="Data de Validade"
                                                name={"data-val"}
                                                value={dataValidadeValue}
                                                error={!dataValidadeValid}
                                                onChange={(e) => handleDataValidadeValidation(e)}
                                            />
                                        </Box>

                                        <Box sx={{ gridArea: "cvv" }}>
                                            <Input
                                                required
                                                label="CVV"
                                                name={"cvv"}
                                            />
                                        </Box>

                                        <Box sx={{ gridArea: "forma-pagam" }}>
                                            <Input
                                                select={true}
                                                required
                                                value={currency}
                                                onChange={handleChange}
                                                label="Forma de Pagamento"
                                                name={"forma-pagam"}
                                            >
                                                {currencies.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Input>
                                        </Box>
                                        <Box
                                            width={"100%"}
                                            padding={"30px"}
                                            sx={{ gridArea: "finalizar" }}
                                        >
                                            <Button type="submit">
                                                Finalizar Pagamento
                                            </Button>
                                        </Box>
                                    </Box>

                                </Box>
                            </FormControl>
                        </GenericCard>
                    </Grid>

                </Box >
            </Box >

            <Footer />
        </div >
    );
};

export default Checkout;