import React from "react";

interface Props {
    celsius: Number;
}

export default function BoilingVerdictrdict(props: Props): React.ReactElement {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;

}