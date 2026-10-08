import * as z from 'zod';
import { Prisma } from '../../../../app/generated/prisma/browser';
import { ProductCreatetagsInputObjectSchema as ProductCreatetagsInputObjectSchema } from './ProductCreatetagsInput.schema';
import { ProductCreateimagesInputObjectSchema as ProductCreateimagesInputObjectSchema } from './ProductCreateimagesInput.schema'


const DecimalJSLikeSchema: z.ZodType<Prisma.DecimalJsLike> = z.object({
  d: z.array(z.number()),
  e: z.number(),
  s: z.number(),
  // Zod v3/v4 compatible callable check
  toFixed: z.custom<Prisma.DecimalJsLike['toFixed']>((v) => typeof v === 'function'),
});

// Accept canonical decimal strings (+/-, optional fraction, optional exponent), or Infinity/NaN.
const DECIMAL_STRING_REGEX = /^(?:[+-]?(?:[0-9]+(?:\.[0-9]+)?(?:[eE][+\-]?[0-9]+)?|Infinity)|NaN)$/;

const isValidDecimalInput = (
  v?: null | string | number | Prisma.DecimalJsLike,
): v is string | number | Prisma.DecimalJsLike => {
  if (v === undefined || v === null) return false;
  return (
    // Cross-runtime-copy safe check (browser and server runtimes bundle separate Decimal classes)
    Prisma.Decimal.isDecimal(v) ||
    (typeof v === 'object' &&
      'd' in v &&
      'e' in v &&
      's' in v &&
      'toFixed' in v) ||
    (typeof v === 'string' && DECIMAL_STRING_REGEX.test(v)) ||
    typeof v === 'number'
  );
};

const makeSchema = () => z.object({
  id: z.coerce.number().int().optional(),
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
  returnPolicy: z.string().optional().nullable(),
  minimumOrderQuantity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  barcode: z.string().optional().nullable(),
  qrCode: z.string().optional().nullable(),
  images: z.union([z.lazy(() => ProductCreateimagesInputObjectSchema), z.string().array()]).optional(),
  thumbnail: z.string(),
  availabilityStatus: z.string().optional().nullable()
}).strict();
export const ProductCreateManyCategoryInputObjectSchema: z.ZodType<Prisma.ProductCreateManyCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyCategoryInput>;
export const ProductCreateManyCategoryInputObjectZodSchema = makeSchema();
