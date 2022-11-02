import React, { ChangeEventHandler } from "react";
import TextField from "@mui/material/TextField";
import "./Input.scss";

interface InputType {
    label: string
    type?: string
    required?: boolean
    name: string
    value?: string
    onChange?: ChangeEventHandler
    size?: "small" | "medium"
}

const Input = ({ size = "small", required = false, ...props }: InputType) => {
    return (
        <div>
            <TextField
                className={"input"}
                required={required}
                label={props.label}
                type={props.type}
                variant="filled"
                color="secondary"
                size={size}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                InputProps={{ disableUnderline: true } }
            >

            </TextField>
        </div>
    );
};

export default Input;
