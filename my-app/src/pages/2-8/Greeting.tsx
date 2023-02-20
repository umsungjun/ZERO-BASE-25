import React from "react";

interface Types { //TS에서는 props의 타입을 지정해줘야함
    name?: string
    count?: number // 없다면 undefined로 
}

// 유저 그리팅 컴포넌트
function UserGreeting(props: Types) {
    return <h1>{props.name && props.name + ','} Welcome {!!props.count && `It's ${props.count}`} times</h1>
}

// 게스트 그리팅 컴포넌트
function GuestGreeting(props: Types) {
    return <h1>Please Sign up</h1>
}

// 그리팅 컴포넌트
export default function Greeting(): React.ReactElement {
    const isLogdeIn = false
    return (
        <>
            {isLogdeIn ? <UserGreeting name="엄성준" count={0} /> : null}
        </>
    )
}