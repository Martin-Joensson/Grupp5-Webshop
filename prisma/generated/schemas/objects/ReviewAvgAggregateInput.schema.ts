import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  rating: z.literal(true).optional()
}).strict();
export const ReviewAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReviewAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewAvgAggregateInputType>;
export const ReviewAvgAggregateInputObjectZodSchema = makeSchema();
