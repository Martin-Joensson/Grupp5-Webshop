import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './objects/CategoryWhereUniqueInput.schema';

export const CategoryDeleteOneSchema: z.ZodType<Prisma.CategoryDeleteArgs> = z.object({   where: CategoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoryDeleteArgs>;

export const CategoryDeleteOneZodSchema = z.object({   where: CategoryWhereUniqueInputObjectSchema }).strict();