import React from "react";
import "./GenericCard.scss";

interface GenericCardTypes {
    children?: React.ReactNode,
}

const GenericCard = (props: GenericCardTypes) => {
    return (
        <div className="card">{props.children}</div>
    );
};

export default GenericCard;