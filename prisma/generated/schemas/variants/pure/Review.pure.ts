import * as z from 'zod';
// prettier-ignore
export const ReviewModelSchema = z.object({
    id: z.number().int(),
    product: z.unknown().nullable(),
    productId: z.number().int().nullable(),
    rating: z.number().int(),
    comment: z.string(),
    date: z.date(),
    reviewerName: z.string(),
    reviewerEmail: z.string()
}).strict();

export type ReviewPureType = z.infer<typeof ReviewModelSchema>;
