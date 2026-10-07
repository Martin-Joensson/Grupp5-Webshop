import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { ProductUncheckedCreateInputObjectSchema as ProductUncheckedCreateInputObjectSchema } from './objects/ProductUncheckedCreateInput.schema';

export const ProductCreateOneSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({   data: ProductUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductCreateArgs>;

export const ProductCreateOneZodSchema = z.object({   data: ProductUncheckedCreateInputObjectSchema }).strict();