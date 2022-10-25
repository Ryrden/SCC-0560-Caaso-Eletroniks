import React from "react";
import TextField from "@mui/material/TextField";
import "./Input.scss";

interface InputType {
    label: string
    type?: string
    required?: boolean
    name: string
    size?: "small" | "medium"
}

const Input = ({ size = "small", required = false, type = "text", ...props }: InputType) => {
    return (
        <div>
            <TextField
                className={"input"}
                required={required}
                label={props.label}
                type={type}
                variant="filled"
                color="secondary"
                size={size}
                name={props.name}
                InputProps={{ disableUnderline: true } }
            />
        </div>
    );
};

export default Input;
