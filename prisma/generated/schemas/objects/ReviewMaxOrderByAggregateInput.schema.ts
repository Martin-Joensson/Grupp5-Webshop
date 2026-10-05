import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  reviewerName: SortOrderSchema.optional(),
  reviewerEmail: SortOrderSchema.optional()
}).strict();
export const ReviewMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMaxOrderByAggregateInput>;
export const ReviewMaxOrderByAggregateInputObjectZodSchema = makeSchema();
