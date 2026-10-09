import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { CategoryUpdateInputObjectSchema as CategoryUpdateInputObjectSchema } from './objects/CategoryUpdateInput.schema';
import { CategoryUncheckedUpdateInputObjectSchema as CategoryUncheckedUpdateInputObjectSchema } from './objects/CategoryUncheckedUpdateInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './objects/CategoryWhereUniqueInput.schema';

export const CategoryUpdateOneSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({   data: z.union([CategoryUpdateInputObjectSchema, CategoryUncheckedUpdateInputObjectSchema]), where: CategoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoryUpdateArgs>;

export const CategoryUpdateOneZodSchema = z.object({   data: z.union([CategoryUpdateInputObjectSchema, CategoryUncheckedUpdateInputObjectSchema]), where: CategoryWhereUniqueInputObjectSchema }).strict();