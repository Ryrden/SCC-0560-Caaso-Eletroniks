import React from "react";
import "@/components/Button/Button.scss";

interface ButtonPropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode,
    btntype: "primary" | "secondary",
}

const Button:React.FC<ButtonPropTypes> = (props: ButtonPropTypes) => {
    const buttonType = props.btntype;
    return (
        <button className={`button ${buttonType}`} {...props}>{props.children}</button>
    );
};

export default Button;
