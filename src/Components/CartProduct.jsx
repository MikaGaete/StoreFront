export const CartProduct = ({product}) => {
    return (
        <tr>
            <td>{product.nombre}</td>
            <td>{product.marca}</td>
            <td>{product.cantidad}</td>
            <td>{product.precio}</td>
        </tr>
    )
}