import React, { ChangeEvent } from "react";

interface Props {
    filterText: string;
    inStockOnly: boolean; // 체크박스의 value
    onFilterTextChange: (arg1: string) => void;
    onInstockChange: (arg1: boolean) => void;
}

export default function SearchBar(props: Props): React.ReactElement {
    const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onFilterTextChange(e.target.value)
    }

    const handleInstockChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInstockChange(!e.target.value) // ChangeEvent<HTMLInputElement>값이 문자로 넘어오기 때문에 boolean타입에 어긋남 그러므로 !를 붙여 boolean으로 전환
    }

    return (
        <form>
            <input type='text' placeholder="Search..." value={props.filterText} onChange={handleFilterTextChange} />
            <p>
                <input type='checkbox' checked={props.inStockOnly} onChange={handleInstockChange} />
                Only show products in stock
            </p>
        </form>

    )
}