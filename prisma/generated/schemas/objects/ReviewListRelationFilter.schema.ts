import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReviewWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReviewWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReviewWhereInputObjectSchema).optional()
}).strict();
export const ReviewListRelationFilterObjectSchema: z.ZodType<Prisma.ReviewListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReviewListRelationFilter>;
export const ReviewListRelationFilterObjectZodSchema = makeSchema();
