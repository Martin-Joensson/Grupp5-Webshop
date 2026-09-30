import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const ReviewFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  product: ProductSchema.optional(),
  productId: z.number().int().nullable().optional(),
  rating: z.number().int(),
  comment: z.string(),
  date: z.date(),
  reviewerName: z.string(),
  reviewerEmail: z.string()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});