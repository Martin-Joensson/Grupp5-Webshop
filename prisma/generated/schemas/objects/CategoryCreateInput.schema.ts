import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ProductCreateNestedManyWithoutCategoryInputObjectSchema as ProductCreateNestedManyWithoutCategoryInputObjectSchema } from './ProductCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const CategoryCreateInputObjectSchema: z.ZodType<Prisma.CategoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateInput>;
export const CategoryCreateInputObjectZodSchema = makeSchema();
