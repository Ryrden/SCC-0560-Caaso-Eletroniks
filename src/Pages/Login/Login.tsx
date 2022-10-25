import React from "react";
import Button from "@/components/Button/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@/components/Input/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GenericCard from "@/components/GenericCard/GenericCard";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import ProductCard from "@/components/ProductCard/ProductCard";

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
        <Container component="main" maxWidth="xs" color="#131313">

            <ProductCard 
                productId={"1"} 
                productImgSource={""} title={"sadasdas"} 
                pricing={{
                    fullPrice: "R$ 1.000,00",
                    hasPromotion: true,
                    promotionalPrice: "R$ 1.000,00",
                    promotionWithPaymentMethod: "via pix"
                }} 
                freeShipping={true} />

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
                            style={{ color: "#FFFFFF", margin: "5px 0px"}}
                            label="Lembre de mim"
                        />
                        <Button>
                            Entrar
                        </Button>
                        <Grid container >
                            <Grid item xs={12} display="flex" justifyContent="flex-end" marginTop={"15px"}>
                                <Link href="#" variant="body2" color={"#FFFFFF"} text-decoration={"none"}>
                                        Esqueceu a senha?
                                </Link>
                            </Grid>    
                        </Grid>
                        <Grid container color={"#FFFFFF"} display="flex" justifySelf={"center"} justifyItems={"center"}>
                            <Grid item xs={12} color={"#FFFFFF"}>
                                <Divider>
                                        OU
                                </Divider> 
                            </Grid>
                            <Grid item xs={6}>
                                <FacebookIcon/>
                                    Continuar com
                                      
                            </Grid>
                            <Grid item xs={6}>
                                <GoogleIcon/>
                                    Google  
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </GenericCard>
        </Container>
    );
}