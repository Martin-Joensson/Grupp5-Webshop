import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CategoryAvgAggregateInputObjectSchema: z.ZodType<Prisma.CategoryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoryAvgAggregateInputType>;
export const CategoryAvgAggregateInputObjectZodSchema = makeSchema();
