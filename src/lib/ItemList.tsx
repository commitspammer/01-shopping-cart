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
        <li class="flex flex-row gap-4 items-center py-2">
            <img class="rounded-lg" src="https://picsum.photos/70/70"/>
            <div class="flex-1">
                <p class="text-xl">{ i.name }</p>
                <p class="text-sm">{ i.description }</p>
                <p class="text-sm">R$ { i.price }</p>
            </div>
            <div class="flex flex-col">
                <button><i class="fa-solid fa-plus"/></button>
                <button><i class="fa-solid fa-minus"/></button>
            </div>
            <div>x{ i.quantity }</div>
            <div>R$ { +(i.price * i.quantity).toFixed(2) }</div>
            <button><i class="fa-solid fa-trash"/></button>
        </li>
    </>)
    //<b>{ i.name }</b> { i.description } R${ i.price } x{ i.quantity }

    return <ul>
        { itemList }
    </ul>
}
