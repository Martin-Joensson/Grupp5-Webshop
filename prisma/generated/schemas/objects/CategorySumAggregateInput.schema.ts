import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CategorySumAggregateInputObjectSchema: z.ZodType<Prisma.CategorySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategorySumAggregateInputType>;
export const CategorySumAggregateInputObjectZodSchema = makeSchema();
