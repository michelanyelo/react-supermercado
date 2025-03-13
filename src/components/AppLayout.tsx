import FormComp from "./FormComp";
import {ProductFormData} from "../schema/Product.tsx";
import {useState} from "react";
import ListadoProductos from "./ListadoProductos.tsx";

function AppLayout() {
    const [products, setProducts] = useState<ProductFormData[]>([]);

    const addProduct = (product: ProductFormData) => {
        setProducts([
            {
                ...product,
            },
            ...products,
        ])
    }

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col col-md-6">
                    <h2 className="mb-4 text-center">Agrega un producto a lista de pendientes</h2>
                    <FormComp onSubmit={addProduct}/>
                </div>

                <div className="col col-md-6">
                    <h2 className="mb-4 text-center">Listado de pendientes({products.length})</h2>
                    <ListadoProductos products={products} />
                </div>
            </div>
        </div>
    );
}

export default AppLayout;
