import React, { useState } from "react";


export default function Controlled(): React.ReactElement {

    const [name, setName] = useState('')
    const [essay, setEssay] = useState('')
    const [flavor, setFlavor] = useState('')
    const flavorOption = [{ key: 0, value: 'Grapefruit' }, { key: 1, value: "lime" }, { key: 2, value: 'Coconut' }, { key: 3, value: 'Mango' }]

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert(`이름은 ${name}이고 essay: ${essay} flavor: ${flavor}입니다.`)
        event?.preventDefault() // 이벤트가 존재한다면 preventDefault()를 실행
    }

    const handleChange = (e: React.ChangeEvent) => {
        if (e.target instanceof HTMLInputElement) {
            setName(e.target.value)
        } else if (e.target instanceof HTMLTextAreaElement) {
            setEssay(e.target.value)
        } else if (e.target instanceof HTMLSelectElement) {
            setFlavor(e.target.value)
        }

    }

    // const handleChangeEssay = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setEssay(e.target.value)
    // }

    // const handleChangeFlavor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     setFlavor(e.target.value)
    // }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <label>
                Essay:
                <textarea value={essay} onChange={handleChange} />
            </label>
            <label>
                Pick your favorite flavor:
                <select value={flavor} onChange={handleChange}>
                    {flavorOption.map((item) => {
                        return (
                            <option key={item.key} value={item.value}>{item.value}</option>
                        )
                    })}
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}