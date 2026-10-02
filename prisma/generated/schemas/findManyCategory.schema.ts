import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { CategoryIncludeObjectSchema as CategoryIncludeObjectSchema } from './objects/CategoryInclude.schema';
import { CategoryOrderByWithRelationInputObjectSchema as CategoryOrderByWithRelationInputObjectSchema } from './objects/CategoryOrderByWithRelationInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './objects/CategoryWhereInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './objects/CategoryWhereUniqueInput.schema';
import { CategoryScalarFieldEnumSchema } from './enums/CategoryScalarFieldEnum.schema';
import { ProductFindManySchema } from './findManyProduct.schema';
import { CategoryCountOutputTypeArgsObjectSchema as CategoryCountOutputTypeArgsObjectSchema } from './objects/CategoryCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategoryFindManySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    image: z.boolean().optional(),
    products: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.CategorySelect>;

export const CategoryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    image: z.boolean().optional(),
    products: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const CategoryFindManySchema: z.ZodType<Prisma.CategoryFindManyArgs> = z.object({ select: CategoryFindManySelectSchema.optional(), include: z.lazy(() => CategoryIncludeObjectSchema.optional()), orderBy: z.union([CategoryOrderByWithRelationInputObjectSchema, CategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoryWhereInputObjectSchema.optional(), cursor: CategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CategoryScalarFieldEnumSchema, CategoryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CategoryFindManyArgs>;

export const CategoryFindManyZodSchema = z.object({ select: CategoryFindManySelectSchema.optional(), include: z.lazy(() => CategoryIncludeObjectSchema.optional()), orderBy: z.union([CategoryOrderByWithRelationInputObjectSchema, CategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoryWhereInputObjectSchema.optional(), cursor: CategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CategoryScalarFieldEnumSchema, CategoryScalarFieldEnumSchema.array()]).optional() }).strict();