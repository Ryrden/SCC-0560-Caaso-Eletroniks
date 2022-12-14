import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "../Button/Button";
import GenericCard from "../GenericCard/GenericCard";
import "./ProductCard.scss";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { CartContext } from "@/App";

interface Pricing {
    hasPromotion: boolean
    fullPrice: string
    promotionalPrice?: string
    promotionWithPaymentMethod?: string
}

export interface ProductCardTypes {
    id: number
    productImgSource: string
    title: string
    pricing: Pricing
    freeShipping: boolean
    alt: string
}



const ProductCard = (props: ProductCardTypes) => {

    const [cartItems, setCartItems] = React.useContext(CartContext);
    const theme = useTheme();

    const addItemToCart = (props: ProductCardTypes) => {
        //Verify if Id already exists in cartItems, if so, increment quantity
        //If not, add new item to cartItems
        console.log(props);
        console.log(cartItems);
        setCartItems([...cartItems, {
            productName: props.title,
            productId: props.id + 1,
            unitPrice: props.pricing.fullPrice,
            productImage: props.productImgSource,
            quantity: 1,
            limit: 10,
            lowerLimit: 0
        }]);
        console.log(cartItems);
    };

    return (
        <Box className="product-card" boxShadow={3}>
            <GenericCard>
                <img
                    className="product-card__image"
                    width={"100%"}
                    height={"185px"}
                    src={props.productImgSource}
                    alt={props.alt} />

                <Box paddingY={"18px"} paddingX={"10px"}>
                    <Typography
                        variant="body1"
                        color={"#FFFFFF"}
                        marginBottom={"8px"}
                        height={"3em"}
                    >
                        {props.title}
                    </Typography>
                    <Box>
                        <Typography
                            variant="body1"
                            color={grey[600]}
                            style={{ textDecoration: props.pricing.hasPromotion ? "line-through" : "none" }}>
                            {props.pricing.fullPrice}
                        </Typography>

                        {props.pricing.hasPromotion ? <>
                            <Typography
                                variant="body1"
                                color={"#FFFFFF"}>
                                {props.pricing.promotionalPrice}
                            </Typography>

                            <Box paddingY={"1px"} />

                            <Typography
                                variant="caption"
                                color={"#FFFFFF"}>
                                {props.pricing.promotionWithPaymentMethod}
                            </Typography>
                        </> : null}

                        <Box paddingY={"10px"} />

                        {props.freeShipping
                            ?
                            <Typography
                                variant="caption"
                                color={theme.palette.success.main}>
                                Frete grátis
                            </Typography>
                            : null}

                        <Box paddingY={"12.5px"} />

                        <Box display="flex" alignItems="center">
                            <Box width="100%">
                                <Link to={"/product/" + (props.id - 1)} style={{ textDecoration: "none" }}>
                                    <Button endIcon={<ArrowForward />}>
                                        Ver detalhes
                                    </Button>
                                </Link>
                            </Box>
                            <Box
                                ml={1}
                                width="min-content"
                                sx={{
                                    borderColor: theme.palette.primary.main,
                                    borderStyle: "solid",
                                    borderWidth: "0.1em",
                                    borderRadius: "10%",
                                }}
                                display="flex"
                                alignItems="center"
                                padding="0.1em"
                                onClick={() => addItemToCart(props)}>
                                <IconButton size="small" color="primary">
                                    <AddShoppingCartOutlinedIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </GenericCard>
        </Box>
    );
};

export default ProductCard;