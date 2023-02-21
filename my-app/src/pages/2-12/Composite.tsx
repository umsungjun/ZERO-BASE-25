import React from "react";

interface Props {
    color: string;
    children: React.ReactNode; // children의 타입은 React.ReactNode
}

function FancyBorder(props: Props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

export default function Composite(): React.ReactElement {

    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}