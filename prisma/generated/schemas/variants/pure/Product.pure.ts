import * as z from 'zod';
// prettier-ignore
export const ProductModelSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string(),
    categoryId: z.coerce.number().int(),
    category: z.unknown().nullable(),
    price: z.coerce.number().int(),
    discountPercentage: z.number().nullable(),
    rating: z.coerce.number().nullable(),
    stock: z.coerce.number().int().nullable(),
    tags: z.array(z.string()),
    brand: z.string().nullable(),
    sku: z.string().nullable(),
    weight: z.coerce.number().nullable(),
    width: z.coerce.number().nullable(),
    height: z.coerce.number().nullable(),
    depth: z.coerce.number().nullable(),
    warrantyInformation: z.string().nullable(),
    shippingInformation: z.string().nullable(),
    availabilityStatus: z.string().nullable(),
    reviews: z.array(z.unknown()),
    returnPolicy: z.string().nullable(),
    minimumOrderQuantity: z.number().int().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    barcode: z.string().nullable(),
    qrCode: z.string().nullable(),
    images: z.array(z.string()),
    thumbnail: z.string()
}).strict();

export type ProductPureType = z.infer<typeof ProductModelSchema>;
