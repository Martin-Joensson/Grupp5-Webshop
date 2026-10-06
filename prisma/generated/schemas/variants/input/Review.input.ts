import * as z from 'zod';
// prettier-ignore
export const ReviewInputSchema = z.object({
    id: z.number().int(),
    productId: z.number().int().optional().nullable(),
    rating: z.number().int(),
    comment: z.string(),
    date: z.coerce.date(),
    reviewerName: z.string(),
    reviewerEmail: z.string(),
    product: z.unknown().optional().nullable()
}).strict();

export type ReviewInputType = z.infer<typeof ReviewInputSchema>;
