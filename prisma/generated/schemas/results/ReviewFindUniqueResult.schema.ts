import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const ReviewFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  product: ProductSchema.optional(),
  productId: z.number().int().nullable().optional(),
  rating: z.number().int(),
  comment: z.string(),
  date: z.date(),
  reviewerName: z.string(),
  reviewerEmail: z.string()
}));