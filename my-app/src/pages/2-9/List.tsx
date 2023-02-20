import React from "react";

interface IItemType {
    id: number;
    text: string;
}


export default function List(): React.ReactElement {
    // const numbers = [1, 2, 3, 4, 5]
    const List = [{ id: 1, text: 'Hello world1' }, { id: 2, text: 'Hello world2' }, { id: 3, text: 'Hello world3' }]

    const ListItem = (props: IItemType) => {
        return (
            <li>{props.id + props.text}</li> // map을 통해서 생성할 때는 유니크한 key값을 줘야 함
        )
    }

    return (
        <>
            {List.map((item, i) => (
                <ListItem key={item.id} {...item} />
            ))}
        </>
    )
}