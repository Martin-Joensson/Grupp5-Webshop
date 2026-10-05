import * as z from 'zod';
// prettier-ignore
export const ProductInputSchema = z.object({
    id: z.coerce.number().int(),
    title: z.string(),
    description: z.string(),
    categoryId: z.coerce.number().int(),
    category: z.unknown().optional().nullable(),
    price: z.coerce.number().int().transform((val) => val * 100),
    discountPercentage: z.number().optional().nullable(),
    rating: z.coerce.number().optional().nullable(),
    stock: z.coerce.number().int().optional().nullable(),
    tags: z.array(z.string()),
    brand: z.string().optional().nullable(),
    sku: z.string().optional().nullable(),
    weight: z.coerce.number().optional().nullable(),
    width: z.coerce.number().optional().nullable(),
    height: z.coerce.number().optional().nullable(),
    depth: z.coerce.number().optional().nullable(),
    warrantyInformation: z.string().optional().nullable(),
    shippingInformation: z.string().optional().nullable(),
    availabilityStatus: z.string().optional().nullable(),
    reviews: z.array(z.unknown()),
    returnPolicy: z.string().optional().nullable(),
    minimumOrderQuantity: z.number().int().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    barcode: z.string().optional().nullable(),
    qrCode: z.string().optional().nullable(),
    images: z.array(z.string()),
    thumbnail: z.string()
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
