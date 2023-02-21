import React from "react";
interface IProduct {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

interface Props {
    product: IProduct;
    key: string;
}

export default function ProductRow(props: Props): React.ReactElement {
    const name = props.product.stocked ?
        props.product.name :
        <span style={{ color: 'red' }}>
            {props.product.name}
        </span>
    return (
        <tr>
            <td>{name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}