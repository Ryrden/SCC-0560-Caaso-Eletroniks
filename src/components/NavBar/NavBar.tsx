import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessibilityBar from "./AccessibilityBar/AccessibilityBar";
import logo from "@/assets/imgs/logo.svg";
import "./NavBar.scss";
import "@/Sass/_variables.scss";
import MenuBar from "./MenuBar/MenuBar";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "auto",
    },
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    alignItems: "center",
}));

const SearchIconWrapper = styled("div")(() => ({
    pointerEvents: "none",
    display: "inline-flex",
    color: "#C0C0C0",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        // vertical padding + font size from searchIcon

        paddingLeft: "0.5em",
        transition: theme.transitions.create("width"),
        width: "100%"
    },
    [theme.breakpoints.down("md")]: {
        width: "auto"
    },
    width: "500px"
}));

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const [auth, setAuth] = React.useState(true);


    const menuId = "primary-search-account-menu";

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
                    <p>Carrinho</p>
                </Link>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Typography
                    variant="body1"
                    noWrap
                    component="div"

                >
                    Olá, João
                </Typography>
            </MenuItem>

        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AccessibilityBar />
            <AppBar position="static">
                <Toolbar id="navbar-container">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        >
                            <img src={logo} alt="Logo da Empresa Caaso Eletroniks" />
                        </Typography>
                    </Link>
                    <Search>
                        <StyledInputBase
                            id="input-bar"
                            placeholder="Pesquise por produtos aqui..."
                            inputProps={{ "aria-label": "search" }}
                        />

                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                    </Search>

                    <div>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <Link to="/cart" style={{ textDecoration: "none" }}>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="shopping cart"
                                    color="inherit"
                                    className="navbar-icon"
                                >
                                    <ShoppingCartIcon />
                                </IconButton>
                            </Link>

                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                className="navbar-icon"
                            >
                                <AccountCircle />
                                <Typography
                                    variant="body1"
                                    noWrap
                                    component="div"
                                    sx={{marginLeft: "10px"}}
                                >
                                    Olá, João
                                </Typography>
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                className="navbar-icon"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
            {auth && (
                <div>
                    <Menu
                        id="menu-navbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        sx={{ padding: "0" }}
                    >
                        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                            <MenuItem onClick={handleMenuClose}>Meu perfil</MenuItem>
                        </Link>
                        <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
                    </Menu>
                </div>
            )}
            <MenuBar />
            {renderMobileMenu}
        </Box>
    );
};

export default NavBar;