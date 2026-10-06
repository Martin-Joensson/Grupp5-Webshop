import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { ReviewIncludeObjectSchema as ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewOrderByWithRelationInputObjectSchema as ReviewOrderByWithRelationInputObjectSchema } from './objects/ReviewOrderByWithRelationInput.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewScalarFieldEnumSchema } from './enums/ReviewScalarFieldEnum.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './objects/ProductArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReviewFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReviewSelect> = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    rating: z.boolean().optional(),
    comment: z.boolean().optional(),
    date: z.boolean().optional(),
    reviewerName: z.boolean().optional(),
    reviewerEmail: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ReviewSelect>;

export const ReviewFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    rating: z.boolean().optional(),
    comment: z.boolean().optional(),
    date: z.boolean().optional(),
    reviewerName: z.boolean().optional(),
    reviewerEmail: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
  }).strict();

export const ReviewFindFirstOrThrowSchema: z.ZodType<Prisma.ReviewFindFirstOrThrowArgs> = z.object({ select: ReviewFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReviewIncludeObjectSchema.optional()), orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReviewScalarFieldEnumSchema, ReviewScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReviewFindFirstOrThrowArgs>;

export const ReviewFindFirstOrThrowZodSchema = z.object({ select: ReviewFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReviewIncludeObjectSchema.optional()), orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReviewScalarFieldEnumSchema, ReviewScalarFieldEnumSchema.array()]).optional() }).strict();