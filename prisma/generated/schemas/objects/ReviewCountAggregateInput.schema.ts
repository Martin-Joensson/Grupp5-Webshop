import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  comment: z.literal(true).optional(),
  date: z.literal(true).optional(),
  reviewerName: z.literal(true).optional(),
  reviewerEmail: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ReviewCountAggregateInputObjectSchema: z.ZodType<Prisma.ReviewCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCountAggregateInputType>;
export const ReviewCountAggregateInputObjectZodSchema = makeSchema();
