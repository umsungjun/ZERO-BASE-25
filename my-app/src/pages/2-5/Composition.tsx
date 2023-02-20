import React from "react";
interface Types {
    name: string
}// 타입스크립트는 props의 타입을 설정해줘야 함

export default function Composition(props: Types): React.ReactElement {
    return (
        <>Hello {props.name}</>
    )
}