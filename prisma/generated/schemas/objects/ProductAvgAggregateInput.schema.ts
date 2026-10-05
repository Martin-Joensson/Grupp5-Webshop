import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  price: z.literal(true).optional(),
  discountPercentage: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  stock: z.literal(true).optional(),
  weight: z.literal(true).optional(),
  width: z.literal(true).optional(),
  height: z.literal(true).optional(),
  depth: z.literal(true).optional(),
  minimumOrderQuantity: z.literal(true).optional()
}).strict();
export const ProductAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProductAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductAvgAggregateInputType>;
export const ProductAvgAggregateInputObjectZodSchema = makeSchema();
