import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  name: z.string(),
  slug: z.string(),
  image: z.string()
}).strict();
export const CategoryCreateWithoutProductsInputObjectSchema: z.ZodType<Prisma.CategoryCreateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateWithoutProductsInput>;
export const CategoryCreateWithoutProductsInputObjectZodSchema = makeSchema();
