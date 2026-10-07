import * as z from 'zod';
// prettier-ignore
export const ProductInputSchema = z.object({
    title: z.string(),
    description: z.string(),
    categoryId: z.coerce.number().int(),
    price: z.coerce.number().int(),
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
    returnPolicy: z.string().optional().nullable(),
    minimumOrderQuantity: z.number().int().optional().nullable(),
    barcode: z.string().optional().nullable(),
    qrCode: z.string().optional().nullable(),
    images: z.array(z.string()),
    thumbnail: z.string(),
    category: z.unknown(),
    reviews: z.array(z.unknown())
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
