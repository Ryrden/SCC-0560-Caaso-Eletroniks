import React from "react";
import TextField from "@mui/material/TextField";
import "./Input.scss";

interface InputType {
    label2: string
}

const Input = (props: InputType) => {
    return (
        <div>
            <TextField 
                className="input" label={props.label2} variant="outlined" />
        </div>
    );
};

export default Input; //Importa com qualquer nome depois