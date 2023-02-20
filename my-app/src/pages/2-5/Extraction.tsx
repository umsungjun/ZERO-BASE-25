import React from "react";
interface Types {
    avatarUrl: string;
    name: string;
    text: string;
    date: string;
}// 타입스크립트는 props의 타입을 설정해줘야 함

export default function Extraction(props: Types): React.ReactElement {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.avatarUrl}
                    alt={props.name}
                />
                <div className="UserInfo-name">
                    {props.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {(props.date)}
            </div>
        </div>
    );
}