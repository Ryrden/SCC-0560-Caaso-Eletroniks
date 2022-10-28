import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "../Button/Button";
import GenericCard from "../GenericCard/GenericCard";
import "./ProductCard.scss";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { grey } from "@mui/material/colors";

interface Pricing {
    hasPromotion: boolean
    fullPrice: string
    promotionalPrice?: string
    promotionWithPaymentMethod?: string
}

export interface ProductCardTypes {
    productId: string
    productImgSource: string
    title: string
    pricing: Pricing
    freeShipping: boolean
}

const ProductCard = (props: ProductCardTypes) => {

    const theme = useTheme();

    return (
        <Box className="product-card" boxShadow={3}>
            <GenericCard>
                <Box
                    className="product-card__image"
                    width={"100%"}
                    height={"185px"}
                    style={{backgroundImage: `url(${props.productImgSource})`}} />

                <Box paddingY={"18px"} paddingX={"10px"}>
                    <Typography
                        variant="body1"
                        color={"#FFFFFF"}>
                        {props.title}
                    </Typography>

                    <Box paddingY={"8px"} />

                    <Box>
                        <Typography
                            variant="body1"
                            color={grey[600]}
                            style={{textDecoration: props.pricing.hasPromotion ? "line-through" : "none"}}>
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

                        <Box display={"flex"}>
                            <Box width={"100%"}>
                                <Button>
                                  Ver detalhes
                                </Button>
                            </Box>
                            <Box width={"min-content"}>
                                <IconButton color="primary">
                                    <AddShoppingCartOutlinedIcon />
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