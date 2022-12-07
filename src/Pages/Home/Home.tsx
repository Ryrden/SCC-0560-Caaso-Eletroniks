import React, { useEffect } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Box, colors, CssBaseline, Grid, Typography, useTheme } from "@mui/material";
import CButton from "@/components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton";
import { STATUS, useSegmentState } from "@/hooks/useSegmentState";
import BackgroundImage from "@/assets/imgs/home-bg.png";

import { productsList } from "./products";
import { ProductModel } from "@/models/ProductModel";

const Home = () => {

    const theme = useTheme();

    const segmentState = useSegmentState<ProductModel[]>({ data: [], status: STATUS.PENDING });

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
            <Box style={{
                backgroundImage: `url(${BackgroundImage}), 
                linear-gradient(${theme.palette.secondary.main}, transparent)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>

                <CssBaseline />
                <NavBar />

                <HomeCarousel />

                <Box maxWidth={"1160px"} marginX={"auto"} paddingX={"20px"} paddingTop={"46px"} paddingBottom={"90px"}>
                    <Grid
                        container
                        sx={{ justifyContent: { xs: "center", lg: "left" } }}
                    >
                        <Box borderBottom={5} borderColor={"primary.main"} style={{ width: "fit-content" }}>
                            <Typography
                                variant="h4"
                                color={colors.grey.A100}

                                fontWeight={"bold"}
                                sx={{ typography: { xs: "h6", sm: "h5", md: "h4" } }}>
                                Em promoção
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid container
                        width={"100%"}
                        sx={{ justifyContent: { xs: "center" }, gap: { xs: "10px", sm: "30px" } }}
                        columns={{ xs: 2, sm: 3, md: 4 }}
                        marginTop={"48px"}
                        marginBottom={"40px"}>
                        {segmentState.hasSucceeded ? segmentState.data?.map((product) => {
                            return <ProductCard
                                key={product.id}
                                id={product.id}
                                productImgSource={product.imgSource}
                                title={product.title}
                                pricing={product.pricing}
                                freeShipping={product.freeShipping}
                                alt={product.alt}
                            />;
                        }) : null}
                        {segmentState.isPending ? [1, 2, 3, 4].map((_, index) => {
                            return <ProductCardSkeleton
                                key={index}
                            />;
                        }) : null}
                    </Grid>

                    <Grid container sx={{ justifyContent: { xs: "center", lg: "flex-end" } }}>
                        <CButton onClick={onSeeMore} endIcon={<ArrowForwardIcon />} fullWidth={false} disabled={segmentState.isPending}>
                            Ver mais
                        </CButton>
                    </Grid>

                </Box>

                <Box maxWidth={"1160px"} marginX={"auto"} paddingX={"20px"} paddingTop={"46px"} paddingBottom={"90px"}>
                    <Grid
                        container
                        sx={{ justifyContent: { xs: "center", lg: "left" } }}
                    >
                        <Box borderBottom={5} borderColor={"primary.main"} style={{ width: "fit-content" }}>
                            <Typography
                                variant="h4"
                                color={colors.grey.A100}

                                fontWeight={"bold"}
                                sx={{ typography: { xs: "h6", sm: "h5", md: "h4" } }}>
                                Mais vendidos
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid container
                        width={"100%"}
                        sx={{ justifyContent: { xs: "center" }, gap: { xs: "10px", sm: "30px" } }}
                        columns={{ xs: 2, sm: 3, md: 4 }}
                        marginTop={"48px"}
                        marginBottom={"40px"}>
                        {segmentState.hasSucceeded ? segmentState.data?.map((product) => {
                            return <ProductCard
                                key={product.id}
                                id={product.id}
                                alt={product.alt}
                                productImgSource={product.imgSource}
                                title={product.title}
                                pricing={product.pricing}
                                freeShipping={product.freeShipping}
                            />;
                        }) : null}
                        {segmentState.isPending ? [1, 2, 3, 4].map((_, index) => {
                            return <ProductCardSkeleton
                                key={index}
                            />;
                        }) : null}
                    </Grid>

                    <Grid container sx={{ justifyContent: { xs: "center", lg: "flex-end" } }}>
                        <CButton onClick={onSeeMore} endIcon={<ArrowForwardIcon />} fullWidth={false} disabled={segmentState.isPending}>
                            Ver mais
                        </CButton>
                    </Grid>

                </Box>
            </Box>

            <Footer />
        </div>
    );
};

export default Home;
