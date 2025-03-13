import {ProductFormData} from "../schema/Product.tsx";

interface Props {
    products: ProductFormData[];
}

const ListadoProductos = ({products}:Props) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
            </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListadoProductos;