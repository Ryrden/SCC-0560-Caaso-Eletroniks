import { Box } from "@mui/material";
import React from "react";
import "./GenericCard.scss";

interface GenericCardTypes {
    children?: React.ReactNode,
    sx?: { [key: string]: any }
}

const GenericCard = (props: GenericCardTypes) => {
    return (
        <Box className="card" position="relative" sx={props.sx}>{props.children}</Box>
    );
};

export default GenericCard;