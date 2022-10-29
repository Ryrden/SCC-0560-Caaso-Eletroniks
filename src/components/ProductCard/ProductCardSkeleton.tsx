import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GenericCard from "../GenericCard/GenericCard";
import "./ProductCard.scss";

const ProductCardSkeleton = () => {

    return (
        <Box className="product-card" boxShadow={3}>
            <GenericCard>
                <Skeleton variant="rectangular" width={"100%"} height={"185px"} />

                <Box paddingY={"18px"} paddingX={"10px"}>
                    <Skeleton variant="text" />

                    <Box paddingY={"8px"} />

                    <Box>
                        <Skeleton variant="rectangular" width={"35%"} />

                        <Box paddingY={"1px"}/>

                        <Skeleton variant="rectangular" width={"40%"} />

                        <Box paddingY={"10px"} />
                          
                        <Skeleton variant="rectangular" width={"20%"} />
                        
                        <Box paddingY={"12.5px"} />

                        <Skeleton variant="rectangular" height={"35px"} />
                    </Box>
                </Box>
            </GenericCard>
        </Box>
    );
};

export default ProductCardSkeleton;