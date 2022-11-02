import React, { useEffect } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import TextField from "@/components/Input/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@/components/Button/Button";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import ProductCard, { ProductCardTypes } from "@/components/ProductCard/ProductCard";
import { Box, colors, CssBaseline, Grid, Typography, useTheme } from "@mui/material";
import CButton from "@/components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton";
import { STATUS, useSegmentState } from "@/hooks/useSegmentState";
import BackgroundImage from "@/assets/imgs/home-bg.png";
import GenericCard from "@/components/GenericCard/GenericCard";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PixIcon from '@mui/icons-material/Pix';
import ReceiptIcon from '@mui/icons-material/Receipt';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];


const Pagamento = () => {

    const theme = useTheme();

    const segmentState = useSegmentState<ProductCardTypes[]>({data: [], status: STATUS.PENDING});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    function onSeeMore() {
        console.log("redirect");
    }

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
                        gridTemplateColumns: { md: "1fr 2fr" }}}
                >
                    <Grid container 
                        gap={"33px"}
                        width={"100%"}
                        height={"50%"}
                        sx={{justifyContent: 'center'}}
                        marginTop={"50%"}
                    >
                        <Box id="box-FormaPagamento"
                            style={{backgroundColor: `${theme.palette.background.default}`}}
                            sx={{
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
                                padding={"30px"}
                            >
                                <Button sx={{ mb: '20px'}} startIcon={<CreditCardIcon />}>
                                    Cartão de Crédito
                                </Button>
                                <Button sx={{ mb: '20px'}} startIcon={<PixIcon />}>
                                    Pix
                                </Button>
                                <Button sx={{ mb: '20px'}} startIcon={<ReceiptIcon />}>
                                    Boleto Bancário
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid container 
                        gap={"33px"}
                        width={"100%"}
                        height={"100%"}
                        sx={{justifyContent: 'center'}}
                        marginTop={"48px"}
                    >    
                        <GenericCard>
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
                                    mb={5}
                                >
                                    Dados do Titular do Cartão
                                </Typography>
                                <Box
                                    component="form"
                                    onSubmit={handleSubmit}
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: 2,
                                        gridTemplateRows: 'auto',
                                        gridTemplateAreas: `"nome nome"
                                        "cpf data-nasc"`,
                                    }}
                                >
                                    <Box sx={{ gridArea: 'nome'}}>
                                        <TextField
                                            required
                                            label="Nome impresso no cartão"
                                            name={"nome"}
                                        />
                                    </Box>
                                    
                                    <Box sx={{ gridArea: 'cpf'}}>
                                        <TextField
                                            required
                                            label="CPF"
                                            name={"cpf"}
                                        />       
                                    </Box>

                                    <Box sx={{ gridArea: 'data-nasc'}}>
                                        <TextField
                                            required
                                            label="Data de nascimento"
                                            name={"data-nasc"}
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
                                    component="form"
                                    onSubmit={handleSubmit}
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: 2,
                                        gridTemplateRows: 'auto',
                                        gridTemplateAreas: `"num-cartao num-cartao"
                                        "data-val cvv"
                                        "forma-pagam forma-pagam"`,
                                    }}
                                >
                                    <Box sx={{ gridArea: 'num-cartao' }}>
                                        <TextField
                                            required
                                            label="Número do cartão"
                                            name={"num-cartao"}
                                        />
                                    </Box>

                                    <Box sx={{ gridArea: 'data-val' }}>
                                        <TextField
                                            required
                                            label="Data de Validade"
                                            name={"data-val"}
                                        />
                                    </Box>

                                    <Box sx={{ gridArea: 'cvv' }}>
                                        <TextField
                                            required
                                            label="CVV"
                                            name={"cvv"}
                                        />
                                    </Box>

                                    <Box sx={{ gridArea: 'forma-pagam' }}>
                                        <TextField
                                            type="select"
                                            label="Forma de Pagamento"
                                            name={"forma-pagam"}
                                        />
                                    </Box>
                                </Box>
    
                            </Box>
                            
                            <Box
                                width={"100%"}
                                padding={"30px"}
                            >
                                <Button>
                                    Entrar
                                </Button>
                            </Box>
                        </GenericCard>
                    </Grid>

                </Box>
            </Box>

            <Footer />
        </div>
    );
};

export default Pagamento;