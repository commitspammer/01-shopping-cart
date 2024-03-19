//import { ReactNode } from 'react'

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
        <li className="flex flex-row gap-4 items-center py-2">
            <img className="rounded-lg" src="https://picsum.photos/70/70"/>
            <div className="flex-1">
                <p className="text-xl">{ i.name }</p>
                <p className="text-sm">{ i.description }</p>
                <p className="text-sm">R$ { i.price }</p>
            </div>
            <div className="flex flex-col">
                <button><i className="fa-solid fa-plus"/></button>
                <button><i className="fa-solid fa-minus"/></button>
            </div>
            <div>x{ i.quantity }</div>
            <div>R$ { +(i.price * i.quantity).toFixed(2) }</div>
            <button><i className="fa-solid fa-trash"/></button>
        </li>
    </>)

    return <ul>
        { itemList }
    </ul>
}
