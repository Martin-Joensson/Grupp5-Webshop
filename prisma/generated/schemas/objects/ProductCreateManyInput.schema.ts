import * as z from 'zod';
import { Prisma } from '../../../../app/generated/prisma/browser';
import { ProductCreatetagsInputObjectSchema as ProductCreatetagsInputObjectSchema } from './ProductCreatetagsInput.schema';
import { ProductCreateimagesInputObjectSchema as ProductCreateimagesInputObjectSchema } from './ProductCreateimagesInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string(),
  categoryId: z.number().int(),
  price: z.number().int(),
  discountPercentage: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'discountPercentage' must be a Decimal",
}).optional().nullable(),
  rating: z.number().optional().nullable(),
  stock: z.number().int().optional().nullable(),
  tags: z.union([z.lazy(() => ProductCreatetagsInputObjectSchema), z.string().array()]).optional(),
  brand: z.string().optional().nullable(),
  sku: z.string().optional().nullable(),
  weight: z.number().optional().nullable(),
  width: z.number().optional().nullable(),
  height: z.number().optional().nullable(),
  depth: z.number().optional().nullable(),
  warrantyInformation: z.string().optional().nullable(),
  shippingInformation: z.string().optional().nullable(),
  availabilityStatus: z.string().optional().nullable(),
  returnPolicy: z.string().optional().nullable(),
  minimumOrderQuantity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  barcode: z.string().optional().nullable(),
  qrCode: z.string().optional().nullable(),
  images: z.union([z.lazy(() => ProductCreateimagesInputObjectSchema), z.string().array()]).optional(),
  thumbnail: z.string()
}).strict();
export const ProductCreateManyInputObjectSchema: z.ZodType<Prisma.ProductCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyInput>;
export const ProductCreateManyInputObjectZodSchema = makeSchema();
