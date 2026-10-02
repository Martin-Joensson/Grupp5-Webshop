import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional()
}).strict();
export const ReviewSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewSumOrderByAggregateInput>;
export const ReviewSumOrderByAggregateInputObjectZodSchema = makeSchema();
