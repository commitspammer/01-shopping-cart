import Header from './lib/Header.tsx'
import ItemList from './lib/ItemList.tsx'

function App() {
    const items = [
        {
            name: 'Pizza da mãe',
            description: 'Saborosa pizza caseira feita por sua mãe.',
            price: 79.90,
            quantity: 1,
        },
        {
            name: 'Churrasquinho',
            description: 'Delicioso espetinho à moda da (sua) casa.',
            price: 29.90,
            quantity: 3,
        },
        {
            name: 'Espaguete',
            description: 'Apetitoso macarrão. Basta seguir a receita.',
            price: 59.90,
            quantity: 2,
        },
    ]

    // try ".place-items-stretch"
    return <>
        <div className="flex flex-row container mx-auto gap-x-4 p-12">
            <div className="w-3/4">
                <Header itemCount={items.length}/>
                <div className="h-4"/>
                <ItemList items={items}/>
            </div>
            <div className="w-1/4 bg-sky-700 rounded-lg">
            </div>
        </div>
    </>
}

export default App
