import React, { useEffect, useState } from "react";
import BoilingVerdictrdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function Calcurator(): React.ReactElement {
    const [celsius, setCelsius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(0)
    const [temp, setTemp] = useState({ temperature: 0, scale: '' })

    function toCelsius(fahrenheit: number) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius: number) {
        return (celsius * 9 / 5) + 32;
    }

    // 온도를 컨버트
    const tryConvert = (temp: number) => {
        const rounded = Math.round(temp * 1000) / 1000
        return rounded
    }

    // 값이 바뀔때마다
    const handleChangeTemp = (scale: string, temp: number) => {
        setTemp({ temperature: temp, scale: scale })
        // setState({ scale: 'c', temperature });
    }

    useEffect(() => {
        if (temp.scale === 'c') {
            setCelsius(temp.temperature)
            setFahrenheit(toFahrenheit(tryConvert(temp.temperature)))
        } else {
            setFahrenheit(temp.temperature)
            setCelsius(toCelsius(tryConvert(temp.temperature)))
        }
    }, [temp]) // temp라는 값이 변경될 때 useEffect가 실행됨


    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleChangeTemp} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleChangeTemp} />
            <BoilingVerdictrdict
                celsius={celsius} />
        </div>
    )
}