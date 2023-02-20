import React from "react";


export default function Event(): React.ReactElement {
    const handleClickButton = (e) => {
        console.log('handleClickButton')

    }

    const handleClickCapture = () => {
        console.log('handleClickCapture')
    }

    const handleClickCapture2 = () => {
        console.log('handleClickCapture2')
    }

    const handleClickBubble = () => {
        console.log('handleClickBubble')
    }

    return (
        <div onClickCapture={handleClickCapture}>
            <div onClick={handleClickCapture2} onClickCapture={handleClickBubble}>
                <button onClick={handleClickButton}>Button</button>
            </div>
        </div>
    )
}