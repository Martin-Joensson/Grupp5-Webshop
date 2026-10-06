import * as z from 'zod';
// prettier-ignore
export const ReviewResultSchema = z.object({
    id: z.number().int(),
    productId: z.number().int().nullable(),
    rating: z.number().int(),
    comment: z.string(),
    date: z.date(),
    reviewerName: z.string(),
    reviewerEmail: z.string(),
    product: z.unknown().nullable()
}).strict();

export type ReviewResultType = z.infer<typeof ReviewResultSchema>;
