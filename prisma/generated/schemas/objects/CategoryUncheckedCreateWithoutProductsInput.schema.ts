import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  slug: z.string(),
  image: z.string()
}).strict();
export const CategoryUncheckedCreateWithoutProductsInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateWithoutProductsInput>;
export const CategoryUncheckedCreateWithoutProductsInputObjectZodSchema = makeSchema();
