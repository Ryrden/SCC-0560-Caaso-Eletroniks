import React from "react";
import DesktopDatePicker from "@mui/material/TextField";
import "./DateInput.scss";

interface DateInputType {
    label: string
    required?: boolean
    name: string
    size?: "small" | "medium"
}

const DateInput = ({ size = "small", required = false, ...props }: DateInputType) => {
    return (
        <div>
            <DesktopDatePicker
                className={"date-input"}
                required={required}
                label={props.label}
                variant="filled"
                color="secondary"
                size={size}
                name={props.name}
                InputProps={{ disableUnderline: true } }
            />
        </div>
    );
};

export default DateInput;
