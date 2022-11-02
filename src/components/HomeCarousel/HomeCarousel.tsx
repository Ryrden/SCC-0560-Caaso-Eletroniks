import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForward from "@mui/icons-material/ArrowForward";

import { getMaxKeenSlider } from "../../utils/getMaxKeenSlider";
import { Box, colors, Typography, useTheme } from "@mui/material";
import CarouselImage from "@/assets/imgs/carousel-image-2.jpg";
import CButton from "../Button/Button";

const HomeCarousel: React.FunctionComponent = () => {

    const theme = useTheme();

    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = React.useState(false);
    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
        slides: {
            perView: 1,
        }
    });

    return <>
        <Box position={"relative"}>
            <div ref={ref} className={"keen-slider"}>
                <div className={"keen-slider keen-slider__slide"}>
                    <Banner src={CarouselImage} text={"Computadores gamers com 75% de desconto"} />
                </div>
                <div className={"keen-slider keen-slider__slide"}>
                    <Banner src={CarouselImage} text={"Computadores gamers com 75% de desconto"} />
                </div>
                <div className={"keen-slider keen-slider__slide"}>
                    <Banner src={CarouselImage} text={"Computadores gamers com 75% de desconto"} />
                </div>
                <div className={"keen-slider keen-slider__slide"}>
                    <Banner src={CarouselImage} text={"Computadores gamers com 75% de desconto"} />
                </div>
                <div className={"keen-slider keen-slider__slide"}>
                    <Banner src={CarouselImage} text={"Computadores gamers com 75% de desconto"} />
                </div>
            </div>
            {loaded && instanceRef.current && (
                <Box sx={{ visibility: { xs: "hidden", md: "visible" } }}>
                    <Arrow
                        left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

                    <Arrow
                        onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} disabled={currentSlide >= getMaxKeenSlider(instanceRef.current?.track.details)} />
                </Box>
            )}
            {loaded && instanceRef.current && (
                <Box display={"flex"} gap={"10px"} justifyContent={"center"} marginTop={"15px"}>
                    {instanceRef.current?.track.details.slides.map((_idx, index) => {
                        if (index > getMaxKeenSlider(instanceRef.current?.track.details)) return null;
                        return (
                            <Box
                                key={index}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(index);
                                }}
                                width={"20px"}
                                height={"8px"}
                                borderRadius={"5px"}
                                style={{
                                    backgroundColor: currentSlide === index ? theme.palette.primary.main : colors.grey.A100,
                                    cursor: "pointer"
                                }}
                            />
                        );
                    })}
                </Box>
            )}
        </Box>
    </>;
};

type BannerPropTypes = {
    src: string
    text: string
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {

    const theme = useTheme();

    const color = props.disabled ? colors.grey.A100 : theme.palette.primary.main;

    return (
        <Box
            onClick={props.onClick}
            position={"absolute"}
            top={"50%"}
            right={!props.left ? "10%" : "none"}
            left={props.left ? "10%" : "none"}
            style={{ cursor: props.disabled ? "not-allowed" : "pointer" }}
        >
            {props.left && (
                <ArrowBackIcon style={{ color }} fontSize={"large"} />
            )}
            {!props.left && (
                <ArrowForwardIcon style={{ color }} fontSize={"large"} />
            )}
        </Box>
    );
}


const Banner: React.FunctionComponent<BannerPropTypes> = props => {
    return <Box
        width={"100%"}
        height={"510px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{
            backgroundImage: `url(${props.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
        <Box sx={{ maxWidth: { xs: "80%", md: "60%", lg: "40%" } }}>
            <Typography variant="h2" color={colors.grey.A100} marginBottom={"50px"} sx={{ typography: { xs: "h4", sm: "h3", md: "h2" } }}>
                {props.text}
            </Typography>
            <CButton endIcon={<ArrowForward />} fullWidth={false}>Ver mais</CButton>
        </Box>

    </Box>;
};

export default HomeCarousel;