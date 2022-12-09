import React from "react";
import TextField from "@mui/material/TextField";
import "./Input.scss";

interface InputType {
    children?: React.ReactNode,
    label: string
    type?: string
    required?: boolean
    name: string
    defaultValue: string
    select?: boolean
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: boolean
    focused?: boolean
    inputProps?: { [key: string]: any }
    inputComponent?: React.ForwardRefExoticComponent<any>
    placeholder?: string
    sx?: { [key: string]: any }
    size?: "small" | "medium"
}

const Input = ({ size = "small", required = false, type = "text", select = false, ...props }: InputType) => {

    return (
        <div>
            <TextField
                className={"input"}
                required={required}
                type={type}
                variant="filled"
                color="secondary"
                size={size}
                InputProps={{ disableUnderline: true }}
                select={select}
                error={props.error}
                sx={props.sx}
                placeholder={props.placeholder}
                inputComponent={props.inputComponent}
                inputProps={props.inputProps}
                {...props}
            >{props.children}</TextField>
        </div>
    );
};

export default Input;
