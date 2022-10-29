import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ProductCard, { ProductCardTypes } from "@/components/ProductCard/ProductCard";
import { Box, colors, CssBaseline, Grid, Typography } from "@mui/material";
import CButton from "@/components/Button/Button";
import { productsList } from "./products";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton";
import { STATUS, useSegmentState } from "@/hooks/useSegmentState";

const Home = () => {
    const segmentState = useSegmentState<ProductCardTypes[]>({data: [], status: STATUS.PENDING});

    function initProductsList() {
        segmentState.setStatus(STATUS.PENDING);
        setTimeout(() => {
            segmentState.setData(productsList);
            segmentState.setStatus(STATUS.SUCCEEDED);
        }, 3000);
    }

    useEffect(() => {
        initProductsList();
    }, []);

    function onSeeMore() {
        console.log("redirect");
    }

    return (
        <div>
            <CssBaseline />
            <NavBar />
            
            <HomeCarousel />

            <Box maxWidth={"1160px"} marginX={"auto"} paddingX={"30px"} marginTop={"46px"} marginBottom={"90px"}>
                <Grid
                    container
                    sx={{justifyContent: {xs: "center", lg: "left"}}}
                >
                    <Box borderBottom={5} borderColor={"primary.main"} style={{width: "fit-content"}}>
                        <Typography 
                            variant="h4"
                            color={colors.grey.A100}

                            fontWeight={"bold"} 
                            sx={{ typography: { xs: "h6", sm: "h5", md: "h4"} }}>
                            Em promoção
                        </Typography>
                    </Box>
                </Grid>

                <Grid container 
                    gap={"33px"}
                    width={"100%"}
                    sx={{justifyContent: {xs: "center"}}}
                    marginTop={"48px"}
                    marginBottom={"40px"}>
                    {segmentState.hasSucceeded ? segmentState.data?.map((product, index) => {
                        return <ProductCard
                            key={index}
                            {...product}
                        />;
                    }) : null}
                    {segmentState.isPending ? [1, 2, 3, 4].map((_, index) => {
                        return <ProductCardSkeleton
                            key={index}
                        />;
                    }) : null}
                </Grid>

                <Grid container sx={{justifyContent: {xs: "center", lg: "flex-end"}}}>
                    <CButton onClick={onSeeMore} endIcon={<ArrowForwardIcon />} fullWidth={false} disabled={segmentState.isPending}>
                        Ver mais
                    </CButton>
                </Grid>

            </Box>

            <Box maxWidth={"1160px"} marginX={"auto"} paddingX={"30px"} marginTop={"46px"} marginBottom={"90px"}>
                <Grid
                    container
                    sx={{justifyContent: {xs: "center", lg: "left"}}}
                >
                    <Box borderBottom={5} borderColor={"primary.main"} style={{width: "fit-content"}}>
                        <Typography 
                            variant="h4"
                            color={colors.grey.A100}

                            fontWeight={"bold"} 
                            sx={{ typography: { xs: "h6", sm: "h5", md: "h4"} }}>
                            Mais vendidos
                        </Typography>
                    </Box>
                </Grid>

                <Grid container
                    gap={"33px"} 
                    width={"100%"} 
                    sx={{justifyContent: {xs: "center"}}}
                    marginTop={"48px"} 
                    marginBottom={"40px"}>
                    {segmentState.hasSucceeded ? segmentState.data?.map((product, index) => {
                        return <ProductCard
                            key={index}
                            {...product}
                        />;
                    }) : null}
                    {segmentState.isPending ? [1, 2, 3, 4].map((_, index) => {
                        return <ProductCardSkeleton
                            key={index}
                        />;
                    }) : null}
                </Grid>

                <Grid container sx={{justifyContent: {xs: "center", lg: "flex-end"}}}>
                    <CButton onClick={onSeeMore} endIcon={<ArrowForwardIcon />} fullWidth={false} disabled={segmentState.isPending}>
                        Ver mais
                    </CButton>
                </Grid>

            </Box>

            <Footer />
        </div>
    );
};

export default Home;