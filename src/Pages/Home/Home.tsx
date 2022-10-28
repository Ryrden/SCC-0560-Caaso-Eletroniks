import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ProductCard, { ProductCardTypes } from "@/components/ProductCard/ProductCard";
import { Box, colors, CssBaseline, Grid, Typography } from "@mui/material";
import CButton from "@/components/Button/Button";
import { productsList } from "./products";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {

    const [products, setProducts] = useState<ProductCardTypes[]>([]);

    useEffect(() => {
        setProducts(productsList);
    }, []);

    function onSeeMore() {
        setProducts([...products, ...productsList]);
    }

    return (
        <div>
            <CssBaseline />
            <NavBar />
            
            <Box maxWidth={"1100px"} marginX={"auto"} marginTop={"46px"} marginBottom={"90px"}>
                <Box borderBottom={5} borderColor={"primary.main"} width={"19.5%"} paddingBottom={"8px"}>
                    <Typography variant="h4" color={colors.grey.A100} fontWeight={"bold"}>Em promoção</Typography>
                </Box>

                <Grid container gap={2} width={"100%"} justifyContent={"space-between"} marginTop={"48px"} marginBottom={"40px"}>
                    {products.map((product, index) => {
                        return <ProductCard
                            key={index}
                            {...product}
                        />;
                    })}
                </Grid>

                <Grid container justifyContent="flex-end">
                    <CButton onClick={onSeeMore} endIcon={<ArrowForwardIcon />} fullWidth={false}>
                        Ver mais
                    </CButton>
                </Grid>

            </Box>

            <Box maxWidth={"1100px"} marginX={"auto"} marginTop={"46px"} marginBottom={"90px"}>
                <Box borderBottom={5} borderColor={"primary.main"} width={"20.5%"} paddingBottom={"8px"}>
                    <Typography variant="h4" color={colors.grey.A100} fontWeight={"bold"}>Mais vendidos</Typography>
                </Box>

                <Grid container gap={2} width={"100%"} justifyContent={"space-between"} marginTop={"48px"} marginBottom={"40px"}>
                    {products.map((product, index) => {
                        return <ProductCard
                            key={index}
                            {...product}
                        />;
                    })}
                </Grid>

                <Grid container justifyContent="flex-end">
                    <CButton onClick={onSeeMore} endIcon={<ArrowForwardIcon />} fullWidth={false}>
                        Ver mais
                    </CButton>
                </Grid>
            </Box>

            <Footer />
        </div>
    );
};

export default Home;