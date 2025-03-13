import FormInput from "./FormInput.tsx";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ProductFormData, ProductSchema} from "../schema/Product.tsx";

interface Props {
    onSubmit: (product: ProductFormData) => void;
}

const FormComp = ({onSubmit}: Props) => {
    const methods = useForm<ProductFormData>({
        resolver: zodResolver(ProductSchema)
    })

    const handleSubmit = (data: ProductFormData) => {
        onSubmit(data);
        methods.reset();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <FormInput name={"name"} type={"text"}>Nombre del producto</FormInput>
                <FormInput name={"description"} type={"text"}>Descripción del producto</FormInput>
                <FormInput name={"price"} type={"text"}>Precio del producto</FormInput>
                <FormInput name={"quantity"} type={"number"} min={1}>Cantidad para llevar</FormInput>

                <button type={"submit"} className="btn btn-primary">Enviar</button>
            </form>
        </FormProvider>
    )
};

export default FormComp;
