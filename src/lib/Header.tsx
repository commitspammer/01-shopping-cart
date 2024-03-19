export default function Header(props) {
    const itemCount = props.itemCount || 0
    return <>
        <h2 className="text-3xl">
            Carrinho de compras
        </h2>
        <p>
            Você tem {itemCount} {itemCount === 1 ? 'item' : 'itens'}
        </p>
    </>
}
