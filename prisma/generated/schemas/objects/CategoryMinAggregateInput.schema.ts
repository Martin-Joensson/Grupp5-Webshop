import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  image: z.literal(true).optional()
}).strict();
export const CategoryMinAggregateInputObjectSchema: z.ZodType<Prisma.CategoryMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoryMinAggregateInputType>;
export const CategoryMinAggregateInputObjectZodSchema = makeSchema();
