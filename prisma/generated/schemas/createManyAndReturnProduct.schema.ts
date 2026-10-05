import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { ProductSelectObjectSchema as ProductSelectObjectSchema } from './objects/ProductSelect.schema';
import { ProductCreateManyInputObjectSchema as ProductCreateManyInputObjectSchema } from './objects/ProductCreateManyInput.schema';

export const ProductCreateManyAndReturnSchema: z.ZodType<Prisma.ProductCreateManyAndReturnArgs> = z.object({ select: ProductSelectObjectSchema.optional(), data: z.union([ ProductCreateManyInputObjectSchema, z.array(ProductCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductCreateManyAndReturnArgs>;

export const ProductCreateManyAndReturnZodSchema = z.object({ select: ProductSelectObjectSchema.optional(), data: z.union([ ProductCreateManyInputObjectSchema, z.array(ProductCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();