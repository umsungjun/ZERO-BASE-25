import React, { useState } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export interface IProduct {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

export interface Props {
    filterText: string;
    inStockOnly: boolean;
    products: Array<IProduct>; // 배열안에 요소까지 타입을 지정해줘야 함
}

export default function ProductTable(props: Props): React.ReactElement {
    const [rows, setRows] = useState([])
    const { products, filterText, inStockOnly } = props
    let lastCategory: string = null

    const getCategory = () => {
        products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return
            }
            if (props.inStockOnly && !product.stocked) {
                return
            }

            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.name} />)
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            )
            lastCategory = product.category
        })
    }

    React.useEffect(() => {
        getCategory()
    }, [])
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}