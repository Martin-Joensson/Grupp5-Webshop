import * as z from 'zod';
export const ReviewGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  productId: z.number().int().nullable().optional(),
  rating: z.number().int().optional(),
  comment: z.string().optional(),
  date: z.date().optional(),
  reviewerName: z.string().optional(),
  reviewerEmail: z.string().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    productId: z.number().optional(),
    rating: z.number().optional(),
    comment: z.number().optional(),
    date: z.number().optional(),
    reviewerName: z.number().optional(),
    reviewerEmail: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    productId: z.number().nullable().optional(),
    rating: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    productId: z.number().nullable().optional(),
    rating: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    productId: z.number().int().nullable().optional(),
    rating: z.number().int().nullable().optional(),
    comment: z.string().nullable().optional(),
    date: z.date().nullable().optional(),
    reviewerName: z.string().nullable().optional(),
    reviewerEmail: z.string().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    productId: z.number().int().nullable().optional(),
    rating: z.number().int().nullable().optional(),
    comment: z.string().nullable().optional(),
    date: z.date().nullable().optional(),
    reviewerName: z.string().nullable().optional(),
    reviewerEmail: z.string().nullable().optional()
  }).nullable().optional()
}));