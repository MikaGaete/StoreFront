import {CartProduct} from "../Components/CartProduct.jsx";

export const Cart = () => {

    const aux = [
        {
            nombre: 'Producto 1',
            marca: 'Marca 1',
            cantidad: 1,
            precio: 5900,
        },
        {
            nombre: 'Producto 2',
            marca: 'Marca 2',
            cantidad: 2,
            precio: 14990,
        },
        {
            nombre: 'Producto 3',
            marca: 'Marca 3',
            cantidad: 6,
            precio: 7990,
        }
    ]

    return (
        <div className={'h-[89.75vh] w-[100vw] bg-[#000103]'}>
            <div className={'w-[90vw] m-auto'}>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {aux.map((product) => {
                            return <CartProduct product={product}/>
                        })}
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <div>
                    <button className={'btn btn-primary btn-block mt-2'}>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}