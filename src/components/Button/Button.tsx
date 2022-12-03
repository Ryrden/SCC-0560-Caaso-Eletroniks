import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface ButtonPropTypes extends ButtonProps {
    children?: React.ReactNode,
}

const CButton: React.FC<ButtonPropTypes> = ({ variant = "contained", fullWidth = true, ...props }: ButtonPropTypes) => {
    return (
        <Button variant={variant} fullWidth={fullWidth} {...props} >{props.children}</Button>
    );
};

export default CButton;
