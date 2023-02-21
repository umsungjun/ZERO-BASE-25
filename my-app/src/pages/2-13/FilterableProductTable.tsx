import React, { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";


export default function FilterableProductTable(): React.ReactElement {
    const [filterText, setFilterText] = useState('') // input의 state를 관리하는 
    const [inStockOnly, setinStockOnly] = useState(false)
    const products = [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];

    const handleFilterTextChange = (filterText: string) => {
        setFilterText(filterText) // 매개변수로 받은 filterText의 따라서 setFilterText함수가 실행되야 함
    } // input의 text가 입력될 때 실행

    const handleInstockChange = (inStockOnly: boolean) => {
        setinStockOnly(inStockOnly)
    }


    return (
        <div>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={handleFilterTextChange} onInstockChange={handleInstockChange} /> {/* 검색바, 체크박스 */}
            <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={products} />{/* 상품 영역 */}
        </div>
    )
}