import React from "react";
import { Box, Breadcrumbs, colors, CssBaseline, Divider, Grid, Typography, useTheme } from "@mui/material";
import CartItem from "@/components/CartItem/CartItem";
import GenericCard from "@/components/GenericCard/GenericCard";
import TextField from "@/components/Input/Input";
import CButton from "@/components/Button/Button";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { getAsCurrency } from "@/utils/getAsCurrency";
import { cartItemsFromApi } from "./cartItems";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { CartItemModel } from "@/models/CartModel";
import { CartContext } from "@/App";

function Cart() {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = React.useContext(CartContext);

    function handleValueChange(cartProductId: number, quantity: number) {
        let copy = [...cartItems];

        if (quantity <= 0) {
            copy = copy.filter(cartItem => cartItem.productId != cartProductId);
        } else {
            copy[copy.findIndex(cartItem => cartItem.productId == cartProductId)].quantity = quantity;
        }

        setCartItems(copy);
    }

    // TODO: REFATORAR ISSO
    function getTotal(): number {
        return 10;
        /* return cartItems.reduce((accumulator, { quantity, unitPrice }) => {
            return accumulator + (quantity * unitPrice);
        }, 0); */
    }

    const missingCartItems = () => cartItems.length == 0;

    function continueShopping() {
        navigate("/");
    }

    function goCheckout() {
        navigate("/checkout");
    }

    const breadcrumbs = [
        {
            to: "/",
            label: "Página Inicial",
            current: false
        },
        {
            to: "/",
            label: "Computadores",
            current: false
        },
        {
            to: "/",
            label: "PC Gamer Concórdia AMD Ryzen",
            current: false
        },
        {
            to: "/checkout",
            label: "Carrinho",
            current: true
        },
    ];

    const theme = useTheme();

    return <div>
        <CssBaseline />

        <NavBar />

        <Box marginX={"auto"} marginY={"100px"} paddingX={"30px"} sx={{ width: { xs: "100%", sm: "80%", md: "90%", lg: "1100px" } }}>
            <Box marginBottom={"50px"}>
                <Breadcrumb
                    navigators={breadcrumbs}
                />
            </Box>
            {missingCartItems() ?
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                        <Typography
                            variant="body1"
                            align="center"
                            color={"#FFFFFF"}
                            marginBottom={"25px"}>
                            Seu carrinho está vazio
                        </Typography>
                        <CButton variant={"outlined"} size={"small"} onClick={continueShopping}>Quero continuar comprando</CButton>
                    </Box>
                </Grid>
                : <Box display={"flex"} gap={"40px"} sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>

                    <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"35px"}>
                        {cartItems.map(cartItem => {
                            return <CartItem key={cartItem.productId}
                                onQuantityChanged={(newQuantity) => handleValueChange(cartItem.productId, newQuantity)}
                                {...cartItem} />;
                        })}
                    </Box>

                    <Box width={"100%"}>
                        <Box width={"100%"} borderRadius={"10px"} sx={{ position: { md: "sticky" } }} top={"20px"}>
                            <GenericCard>
                                <Box paddingX={"30px"} paddingTop={"30px"} paddingBottom={"50px"}>
                                    <Typography
                                        variant="h4"
                                        color={"#FFFFFF"}
                                        fontWeight={"600"}>
                                        {getAsCurrency(getTotal())}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        color={theme.palette.success.main}>
                                        Você economiza R$ 1.000,00 comprando a vista
                                    </Typography>

                                    <Box display={"flex"} gap={"10px"} marginTop={"60px"} marginBottom={"30px"} alignItems="center">
                                        <Box width={"70%"}>
                                            <TextField
                                                label="Cupom de desconto"
                                                name={"name"}
                                            />
                                        </Box>
                                        <Box width={"30%"}>
                                            <CButton>Usar cupom</CButton>
                                        </Box>
                                    </Box>

                                    <Divider />

                                    <Box marginTop={"30px"}>
                                        <CButton variant={"outlined"} size={"small"} onClick={continueShopping}>Continuar Comprando</CButton>
                                        <Box paddingY={"9px"} />
                                        <CButton size={"large"} onClick={goCheckout}>Ir para  pagamento</CButton>
                                    </Box>

                                </Box>

                            </GenericCard>
                        </Box>

                    </Box>
                </Box>
            }



        </Box>

        <Footer />

    </div>;
}

export default Cart;