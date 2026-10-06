import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  discountPercentage: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  depth: SortOrderSchema.optional(),
  minimumOrderQuantity: SortOrderSchema.optional()
}).strict();
export const ProductAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductAvgOrderByAggregateInput>;
export const ProductAvgOrderByAggregateInputObjectZodSchema = makeSchema();
