import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const CategoryFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  products: z.array(ProductSchema).optional()
}));