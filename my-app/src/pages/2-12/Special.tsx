import React from "react";

interface Props {
    color: string;
    children: React.ReactNode;
}

interface DialogProps {
    title: string;
    message: string;
}

function FancyBorder(props: Props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props: DialogProps) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}


export default function Special(): React.ReactElement {

    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    )
}