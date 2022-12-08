import createTheme from "@mui/material/styles/createTheme";

const primaryTheme = (fontSize: number | undefined = 15) => createTheme({
    palette: {
        primary: {
            main: "#FCA90D", //Amarelo Caaso
        },
        secondary: {
            main: "#270039", //Roxo Chique
        },
        success: {
            main: "#048B43", //Verde Claro
        },
        info: {
            main: "#F7F7F7", // Branco
        },
        background: {
            default: "#131313", // Preto
        },
        divider: "#565656"
    },
    typography: {
        fontSize: fontSize,
    }
});

export default primaryTheme;