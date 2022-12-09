import createTheme from "@mui/material/styles/createTheme";

const highContrastTheme = (fontSize: number | undefined = 15) => createTheme({
    palette: {
        primary: {
            main: "#AFAFAF",
        },
        secondary: {
            main: "#0C0C0C",
        },
        success: {
            main: "#696969",
        },
        info: {
            main: "#F6F6F6",
        },
        background: {
            default: "#131313",
        },
        divider: "#565656"
    },
    typography: {
        fontSize: fontSize,
    }
});

export default highContrastTheme;