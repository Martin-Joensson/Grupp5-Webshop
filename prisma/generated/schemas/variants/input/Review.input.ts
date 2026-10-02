import * as z from 'zod';
// prettier-ignore
export const ReviewInputSchema = z.object({
    id: z.number().int(),
    product: z.unknown().optional().nullable(),
    productId: z.number().int().optional().nullable(),
    rating: z.number().int(),
    comment: z.string(),
    date: z.coerce.date(),
    reviewerName: z.string(),
    reviewerEmail: z.string()
}).strict();

export type ReviewInputType = z.infer<typeof ReviewInputSchema>;
