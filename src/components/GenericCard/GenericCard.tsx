import { Box } from "@mui/material";
import React from "react";
import "./GenericCard.scss";

interface GenericCardTypes {
    children?: React.ReactNode,
}

const GenericCard = (props: GenericCardTypes) => {
    return (
        <Box className="card" position="relative">{props.children}</Box>
    );
};

export default GenericCard;