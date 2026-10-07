import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './objects/CategoryWhereUniqueInput.schema';

export const CategoryFindUniqueSchema: z.ZodType<Prisma.CategoryFindUniqueArgs> = z.object({   where: CategoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoryFindUniqueArgs>;

export const CategoryFindUniqueZodSchema = z.object({   where: CategoryWhereUniqueInputObjectSchema }).strict();