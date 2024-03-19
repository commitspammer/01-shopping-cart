//import { ReactNode } from 'react'
import Item from './Item.tsx'

//export type ItemListProps {
//    items: {
//        name: string,
//        description: string,
//        price: number,
//        quantity: number,
//    };
//}

export default function ItemList(props) {
    const itemList = props.items.map(i => <>
        <hr/>
        <Item
            title={ i.name }
            description={ i.description }
            price={ i.price }
            quantity={ i.quantity }
        />
    </>)

    return <ul>
        { itemList }
    </ul>
}
