import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface ButtonPropTypes extends ButtonProps {
    children?: React.ReactNode,
}

const CButton: React.FC<ButtonPropTypes> = ({ variant = "contained", ...props }: ButtonPropTypes) => {
    return (
        <Button variant={variant} fullWidth {...props}>{props.children}</Button>
    );
};

export default CButton;
