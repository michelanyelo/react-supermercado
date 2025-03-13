import {z} from 'zod';

export const ProductSchema = z.object({
    name: z
        .string()
        .min(1, {message: "El nombre del producto es requerido"})
        .min(3, {message: "El nombre del producto debe tener al menos 3 caracteres"})
        .max(255),
    description: z
        .string()
        .min(1, {message: "La descripción del producto es requerida"})
        .min(3, {message: "La descripción del producto debe tener al menos 3 caracteres"})
        .max(255),
    price: z
        .string()
        .min(1, {message: "El precio del producto es requerido"}),
    quantity: z
        .string()
        .min(1, {message: "La cantidad para llevar es requerida"})
        .transform((val) => {
            const parsed = parseInt(val, 10);
            if (isNaN(parsed)) {
                throw new Error("La cantidad debe ser un número válido");
            }
            return parsed;
        })
});

export type ProductFormData = z.infer<typeof ProductSchema>;
