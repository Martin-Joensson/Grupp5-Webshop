import * as z from 'zod';
import { Prisma } from '../../../../app/generated/prisma/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema as DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const productscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.coerce.number().int()]).optional(),
  price: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.coerce.number().int()]).optional(),
  discountPercentage: z.union([z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'discountPercentage' must be a Decimal",
})]).optional().nullable(),
  rating: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.coerce.number()]).optional().nullable(),
  stock: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.coerce.number().int()]).optional().nullable(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  brand: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  sku: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  weight: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.coerce.number()]).optional().nullable(),
  width: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.coerce.number()]).optional().nullable(),
  height: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.coerce.number()]).optional().nullable(),
  depth: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.coerce.number()]).optional().nullable(),
  warrantyInformation: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  shippingInformation: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  availabilityStatus: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  returnPolicy: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  minimumOrderQuantity: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  barcode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  qrCode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  thumbnail: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ProductScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = productscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput>;
export const ProductScalarWhereWithAggregatesInputObjectZodSchema = productscalarwherewithaggregatesinputSchema;
