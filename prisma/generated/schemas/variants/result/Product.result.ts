import * as z from 'zod';
// prettier-ignore
export const ProductResultSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string(),
    categoryId: z.number().int(),
    category: z.unknown().nullable(),
    price: z.number().int(),
    discountPercentage: z.number().nullable(),
    rating: z.number().nullable(),
    stock: z.number().int().nullable(),
    tags: z.array(z.string()),
    brand: z.string().nullable(),
    sku: z.string().nullable(),
    weight: z.number().nullable(),
    width: z.number().nullable(),
    height: z.number().nullable(),
    depth: z.number().nullable(),
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

export type ProductResultType = z.infer<typeof ProductResultSchema>;
