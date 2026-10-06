import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReviewCountOrderByAggregateInputObjectSchema as ReviewCountOrderByAggregateInputObjectSchema } from './ReviewCountOrderByAggregateInput.schema';
import { ReviewAvgOrderByAggregateInputObjectSchema as ReviewAvgOrderByAggregateInputObjectSchema } from './ReviewAvgOrderByAggregateInput.schema';
import { ReviewMaxOrderByAggregateInputObjectSchema as ReviewMaxOrderByAggregateInputObjectSchema } from './ReviewMaxOrderByAggregateInput.schema';
import { ReviewMinOrderByAggregateInputObjectSchema as ReviewMinOrderByAggregateInputObjectSchema } from './ReviewMinOrderByAggregateInput.schema';
import { ReviewSumOrderByAggregateInputObjectSchema as ReviewSumOrderByAggregateInputObjectSchema } from './ReviewSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rating: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  reviewerName: SortOrderSchema.optional(),
  reviewerEmail: SortOrderSchema.optional(),
  _count: z.lazy(() => ReviewCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReviewAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReviewMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReviewMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReviewSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReviewOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReviewOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewOrderByWithAggregationInput>;
export const ReviewOrderByWithAggregationInputObjectZodSchema = makeSchema();
