import * as z from 'zod';

export const ReviewSchema = z.object({
  id: z.number().int(),
  productId: z.number().int().nullish(),
  rating: z.number().int(),
  comment: z.string(),
  date: z.date(),
  reviewerName: z.string(),
  reviewerEmail: z.string(),
});

export type ReviewType = z.infer<typeof ReviewSchema>;
