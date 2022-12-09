import React from "react";
import TextField from "@mui/material/TextField";
import "./Input.scss";
import { IMaskInput } from 'react-imask';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props, ref: any) {
      const { onChange, ...other } = props;
      return (
        <IMaskInput
          {...other}
          mask="###.###.###-##"
          definitions={{
            '#': /[0-9]/,
          }}
          inputRef={ref}
          onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
          overwrite
          render={(ref, props) => (
            <TextField innerRef={ref} {...props} />
          )}
        />
      );
    },
);

interface State {
    textmask: string;
}

interface InputType {
    children?: React.ReactNode,
    label: string
    type?: string
    required?: boolean
    name: string
    select?: boolean
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: boolean
    focused?: boolean
    sx?: { [key: string]: any }
    size?: "small" | "medium"
    focus(): void
    inputComponent?: (e: React.forwardRef<HTMLElement, CustomProps>) => void
};

const InputMask = ({ size = "small", required = false, type = "text", select = false, inputComponent = TextMaskCustom, value = '', ...props }: InputType) => {
    
    const [oldValues, setValues] = React.useState<State>({
        textmask: '000.000.000-00',
      });
    
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
          ...oldValues,
          [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <TextField
                className={"input"}
                required={required}
                type={type}
                value={oldValues.textmask}
                variant= "filled"
                color="secondary"
                size={size}
                InputProps={{ disableUnderline: true, inputComponent: inputComponent as any}}
                select={select}
                error={props.error}
                sx={props.sx}
                {...props}
            >{props.children}</TextField>
        </div>
    );
};

export default InputMask;
