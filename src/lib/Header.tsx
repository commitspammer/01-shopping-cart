export default function Header() {
    const itemCount = 6
    return <>
        <h2 class="text-3xl">
            Carrinho de compras
        </h2>
        <p>
            Você tem {itemCount} {itemCount === 1 ? 'item' : 'itens'}
        </p>
    </>
}
