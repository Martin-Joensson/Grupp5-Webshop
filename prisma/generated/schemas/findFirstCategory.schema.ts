import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { CategoryOrderByWithRelationInputObjectSchema as CategoryOrderByWithRelationInputObjectSchema } from './objects/CategoryOrderByWithRelationInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './objects/CategoryWhereInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './objects/CategoryWhereUniqueInput.schema';
import { CategoryScalarFieldEnumSchema } from './enums/CategoryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategoryFindFirstSelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    image: z.boolean().optional(),
    products: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CategorySelect>;

export const CategoryFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    image: z.boolean().optional(),
    products: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CategoryFindFirstSchema: z.ZodType<Prisma.CategoryFindFirstArgs> = z.object({ select: CategoryFindFirstSelectSchema.optional(),  orderBy: z.union([CategoryOrderByWithRelationInputObjectSchema, CategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoryWhereInputObjectSchema.optional(), cursor: CategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CategoryScalarFieldEnumSchema, CategoryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CategoryFindFirstArgs>;

export const CategoryFindFirstZodSchema = z.object({ select: CategoryFindFirstSelectSchema.optional(),  orderBy: z.union([CategoryOrderByWithRelationInputObjectSchema, CategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoryWhereInputObjectSchema.optional(), cursor: CategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CategoryScalarFieldEnumSchema, CategoryScalarFieldEnumSchema.array()]).optional() }).strict();