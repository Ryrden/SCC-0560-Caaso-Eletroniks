import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "../Button/Button";
import GenericCard from "../GenericCard/GenericCard";
import "./ProductCard.scss";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

interface Pricing {
    hasPromotion: boolean
    fullPrice: string
    promotionalPrice?: string
    promotionWithPaymentMethod?: string
}

interface ProductCardTypes {
    productId: string
    productImgSource: string
    title: string
    pricing: Pricing
    freeShipping: boolean
}

const ProductCard = (props: ProductCardTypes) => {
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
                            color={"#FFFFFF"}
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
                                color={"#FFFFFF"}>
                            Frete grátis
                            </Typography> 
                            : null}
                        
                        <Box paddingY={"12.5px"} />

                        <Box display={"flex"}>
                            <Box width={"100%"}>
                                <Button btntype="primary">
                                  Ver detalhes
                                </Button>
                            </Box>
                            <Box width={"min-content"}>
                                <IconButton>
                                    <AddShoppingCartOutlinedIcon style={{ color: "#FCA90D" }} />
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