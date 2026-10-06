import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const ReviewCreateResultSchema = z.object({
  id: z.number().int(),
  productId: z.number().int().nullable().optional(),
  rating: z.number().int(),
  comment: z.string(),
  date: z.date(),
  reviewerName: z.string(),
  reviewerEmail: z.string(),
  product: ProductSchema.optional()
});