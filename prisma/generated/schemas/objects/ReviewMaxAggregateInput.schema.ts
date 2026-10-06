import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  comment: z.literal(true).optional(),
  date: z.literal(true).optional(),
  reviewerName: z.literal(true).optional(),
  reviewerEmail: z.literal(true).optional()
}).strict();
export const ReviewMaxAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMaxAggregateInputType>;
export const ReviewMaxAggregateInputObjectZodSchema = makeSchema();
