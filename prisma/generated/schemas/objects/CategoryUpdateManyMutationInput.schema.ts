import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CategoryUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.CategoryUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateManyMutationInput>;
export const CategoryUpdateManyMutationInputObjectZodSchema = makeSchema();
