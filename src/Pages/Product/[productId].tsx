import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Divider, IconButton, Rating, Typography, useTheme, colors } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import GenericCard from "@/components/GenericCard/GenericCard";
import CButton from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ProductModel } from "@/models/ProductModel";
import { useParams } from "react-router";
import { productsList } from "../Home/products";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
        font: ""
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
        backgroundColor: "#323232",
        borderBottom: "2px solid grey",
    },
    "&:nth-of-type(even)": {
        backgroundColor: "#404040",
        borderBottom: "2px solid grey",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(Description: string, Value: string,) {
    return { Description, Value };
}

const rows = [
    createData("Arquitetura", "AMD Ryzen"),
    createData("Velocidade", "3,6Ghz"),
    createData("Socket", "AM4"),
    createData("Núcleos", "58"),
    createData("Threads", "116"),
];

interface tableSpecification {
    Description: string,
    Value: string,
}

const ProductPage = () => {
    const theme = useTheme();

    const breadcrumbs = [
        {
            to: "/",
            label: "Página Inicial",
            current: false
        },
        {
            to: "",
            label: "PC Gamer Concórdia AMD Ryzen",
            current: true
        },
    ];

    const { id = "0" } = useParams();
    const [products, setProducts] = useState<ProductModel>();

    useEffect(() => {
        setProducts(productsList[+id]);
        console.log(products);
    }, [id]);

    const speceficationList: string[] = ["Processador", "Sistema Operacional", "Memória", "Capacidade", "GPU"];
    const speceficationValue: string[] = [
        products?.specifications.processor || "aa",
        products?.specifications.operatingSystem || "bb",
        products?.specifications.ramMemory || "cc",
        products?.specifications.storage || "dd",
        products?.specifications.videoCard || "ee"
    ];

    return <div>
        <Box>
            <CssBaseline />
            <NavBar />

            <Box marginX={"auto"} marginY={"100px"} paddingX={"30px"} sx={{ width: { xs: "100%", sm: "80%", md: "90%", lg: "1100px" } }}>

                <Box marginBottom={"50px"}>
                    <Breadcrumb
                        navigators={breadcrumbs}
                    />
                </Box>

                <Box width={"100%"} borderRadius={"10px"}>
                    <GenericCard>
                        <Box width={"100%"} display={"flex"}
                            sx={{
                                padding: { xs: "16px", sm: "20px", md: "30px" },
                                gap: { xs: "10px", sm: "16px", md: "30px" },
                                flexDirection: { xs: "column", md: "row" },
                                maxHeight: { md: "600px" }
                            }}>
                            <Box width={"100%"}
                                sx={{ height: { xs: "300px", md: "500px" } }}
                                borderRadius={"5px"}
                                overflow={"hidden"}
                                style={{
                                    backgroundPosition: "center",
                                    backgroundImage: `url(${products?.imgSource})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                }} />

                            <Box width={"100%"}
                                display={"flex"}
                                flexDirection={"column"}
                                justifyContent={"space-between"}
                                gap={"30px"}>
                                <Box>
                                    <Typography
                                        variant="h4"
                                        color={"#FFFFFF"}
                                        marginBottom={"25px"}>
                                        {products?.title}
                                    </Typography>

                                    <Box marginY={"40px"}>
                                        <Rating name="read-only" value={4.5} readOnly size={"large"} precision={0.5} />
                                    </Box>

                                    <Box display={"flex"}
                                        justifyContent={"space-between"}
                                        gap={"5px"}
                                        sx={{ flexDirection: { xs: "column", sm: "row" } }}>
                                        <Box width={"100%"}>
                                            <Typography
                                                variant="h5"
                                                color={"#FFFFFF"}>
                                                {products?.pricing?.promotionalPrice}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color={"#FFFFFF"}>
                                                À vista
                                            </Typography>
                                        </Box>

                                        <Divider orientation={"vertical"} flexItem />

                                        <Box sx={{ textAlign: { xs: "left", sm: "right" } }} width={"100%"}>
                                            <Typography
                                                variant="h5"
                                                color={"#FFFFFF"}>
                                                {products?.pricing?.fullPrice}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color={"#FFFFFF"}>
                                                À prazo
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>


                                <Box>
                                    {/* TODO: checkout ir por ID */}
                                    <Link to={"/checkout/"} style={{ textDecoration: "none" }}>
                                        <CButton size={"large"} startIcon={<AddShoppingCartIcon />}>Comprar</CButton>
                                    </Link>
                                    <Box display={"flex"} gap={"5px"} alignItems={"center"} marginTop={"20px"}>
                                        <Box width={"100%"}>
                                            <Input label={"Calcule o frete (CEP)"} name={"cep"} size={"small"}
                                                sx={{ borderRadius: "5px" }} />
                                        </Box>
                                        <Box
                                            ml={1}
                                            width="min-content"
                                            sx={{
                                                borderColor: theme.palette.primary.main,
                                                borderStyle: "solid",
                                                borderWidth: "0.1em",
                                                borderRadius: "5px",
                                            }}
                                            display="flex"
                                            alignItems="center">
                                            <IconButton size="medium" color="primary">
                                                <SearchIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>

                        <Box width={"100%"}
                            sx={{
                                padding: { xs: "16px", sm: "20px", md: "30px" },
                            }}
                        >
                            <Box borderBottom={5} borderColor={"primary.main"} style={{ width: "fit-content" }}>
                                <Typography
                                    variant="h4"
                                    color={colors.grey.A100}

                                    fontWeight={"bold"}
                                    sx={{ typography: { xs: "h6", sm: "h5", md: "h4" } }}>
                                    Descrição do Produto
                                </Typography>
                            </Box>
                            <Typography color="info.main" paddingY={2}>
                                {products?.description}
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, impedit recusandae vero ut
                                doloremque aliquid inventore eos rerum enim illum rem fugit, labore quasi? Dolores vero non
                                fugit perspiciatis repellendus! oloremque aliquid inventore eos rerum enim illum rem fugit, labore quasi? Dolores vero non
                                fugit perspiciatis repellendus!
                            </Typography>
                            <Box borderBottom={5} borderColor={"primary.main"} style={{ width: "fit-content" }}>
                                <Typography
                                    variant="h4"
                                    color={colors.grey.A100}

                                    fontWeight={"bold"}
                                    sx={{ typography: { xs: "h6", sm: "h5", md: "h4" } }}>
                                    Informações Técnicas
                                </Typography>
                            </Box>

                            <Box width={"100%"}
                                sx={{ padding: "30px", marginTop: "30px" }}>
                                <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
                                    <Table sx={{ widht: "100%" }} aria-label="Tabela de especificações técnicas">
                                        <TableBody>
                                            {rows.map((row) => (
                                                <StyledTableRow key={row.Description}>
                                                    <StyledTableCell component="th" scope="row" sx={{ color: "#C3C3C3" }}>
                                                        {row.Description}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right" sx={{ fontWeight: "bold", color: "#FFFFFF" }}>{row.Value}</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>

                    </GenericCard>


                </Box>



            </Box>

            <Footer />
        </Box >
    </div >;
};

export default ProductPage;
