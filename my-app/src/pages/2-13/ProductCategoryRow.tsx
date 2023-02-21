import React from "react";

interface Props {
    category: string;
    key: string;
}

export default function ProductCategoryRow(props: Props): React.ReactElement {
    return (
        <tr>
            <th>{props.category}</th>
        </tr>
    )
}