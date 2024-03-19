export default function Item(props) {
    const { title, description, price, quantity } = props

    return <>
        <li className="flex flex-row gap-4 items-center py-2">
            <img className="rounded-lg" src="https://picsum.photos/70/70"/>
            <div className="flex-1">
                <p className="text-xl">{ title }</p>
                <p className="text-sm">{ description }</p>
                <p className="text-sm">R$ { price }</p>
            </div>
            <div className="flex flex-col">
                <button><i className="fa-solid fa-plus"/></button>
                <button><i className="fa-solid fa-minus"/></button>
            </div>
            <div>x{ quantity }</div>
            <div>R$ { +(price * quantity).toFixed(2) }</div>
            <button><i className="fa-solid fa-trash"/></button>
        </li>
    </>
}
