import * as z from 'zod';
import { Prisma } from '../../../../app/generated/prisma/browser';
import { ProductCreatetagsInputObjectSchema as ProductCreatetagsInputObjectSchema } from './ProductCreatetagsInput.schema';
import { ProductCreateimagesInputObjectSchema as ProductCreateimagesInputObjectSchema } from './ProductCreateimagesInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string(),
  price: z.coerce.number().int(),
  discountPercentage: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'discountPercentage' must be a Decimal",
}).optional().nullable(),
  rating: z.coerce.number().optional().nullable(),
  stock: z.coerce.number().int().optional().nullable(),
  tags: z.union([z.lazy(() => ProductCreatetagsInputObjectSchema), z.string().array()]).optional(),
  brand: z.string().optional().nullable(),
  sku: z.string().optional().nullable(),
  weight: z.coerce.number().optional().nullable(),
  width: z.coerce.number().optional().nullable(),
  height: z.coerce.number().optional().nullable(),
  depth: z.coerce.number().optional().nullable(),
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
export const ProductCreateManyCategoryInputObjectSchema: z.ZodType<Prisma.ProductCreateManyCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyCategoryInput>;
export const ProductCreateManyCategoryInputObjectZodSchema = makeSchema();
