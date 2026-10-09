import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { CategoryUncheckedCreateInputObjectSchema as CategoryUncheckedCreateInputObjectSchema } from './objects/CategoryUncheckedCreateInput.schema';

export const CategoryCreateOneSchema: z.ZodType<Prisma.CategoryCreateArgs> = z.object({   data: CategoryUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoryCreateArgs>;

export const CategoryCreateOneZodSchema = z.object({   data: CategoryUncheckedCreateInputObjectSchema }).strict();