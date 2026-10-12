import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { ProductUpdateInputObjectSchema as ProductUpdateInputObjectSchema } from './objects/ProductUpdateInput.schema';
import { ProductUncheckedUpdateInputObjectSchema as ProductUncheckedUpdateInputObjectSchema } from './objects/ProductUncheckedUpdateInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';

export const ProductUpdateOneSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({   data: z.union([ProductUpdateInputObjectSchema, ProductUncheckedUpdateInputObjectSchema]), where: ProductWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductUpdateArgs>;

export const ProductUpdateOneZodSchema = z.object({   data: z.union([ProductUpdateInputObjectSchema, ProductUncheckedUpdateInputObjectSchema]), where: ProductWhereUniqueInputObjectSchema }).strict();