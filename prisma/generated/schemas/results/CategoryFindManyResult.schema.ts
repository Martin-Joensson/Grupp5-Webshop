import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const CategoryFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  products: z.array(ProductSchema).optional()
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