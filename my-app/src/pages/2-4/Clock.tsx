import React, { useState } from "react";

function Clock(): React.ReactElement {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    const tick = () => {
        setTime(new Date().toLocaleTimeString())
    }
    setInterval(tick, 1000)
    return (
        <>
            <div>
                <h1>Hello 성준</h1>
                <h2>It is{time}</h2>
            </div>
        </>
    )

}



export default Clock