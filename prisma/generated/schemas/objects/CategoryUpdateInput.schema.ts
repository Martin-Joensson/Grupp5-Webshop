import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutCategoryNestedInputObjectSchema as ProductUpdateManyWithoutCategoryNestedInputObjectSchema } from './ProductUpdateManyWithoutCategoryNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const CategoryUpdateInputObjectSchema: z.ZodType<Prisma.CategoryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateInput>;
export const CategoryUpdateInputObjectZodSchema = makeSchema();
