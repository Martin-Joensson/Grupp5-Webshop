import * as z from 'zod';
import { Prisma } from '../../../../app/generated/prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CategoryNullableScalarRelationFilterObjectSchema as CategoryNullableScalarRelationFilterObjectSchema } from './CategoryNullableScalarRelationFilter.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { ReviewListRelationFilterObjectSchema as ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const productwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.coerce.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => IntFilterObjectSchema), z.coerce.number().int()]).optional(),
  price: z.union([z.lazy(() => IntFilterObjectSchema), z.coerce.number().int().transform((val) => val * 100)]).optional(),
  discountPercentage: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'discountPercentage' must be a Decimal",
})]).optional().nullable(),
  rating: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.coerce.number()]).optional().nullable(),
  stock: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.coerce.number().int()]).optional().nullable(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  brand: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  sku: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  weight: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.coerce.number()]).optional().nullable(),
  width: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.coerce.number()]).optional().nullable(),
  height: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.coerce.number()]).optional().nullable(),
  depth: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.coerce.number()]).optional().nullable(),
  warrantyInformation: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  shippingInformation: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  availabilityStatus: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  returnPolicy: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  minimumOrderQuantity: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  barcode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  qrCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  thumbnail: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  category: z.union([z.lazy(() => CategoryNullableScalarRelationFilterObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional()
}).strict();
export const ProductWhereInputObjectSchema: z.ZodType<Prisma.ProductWhereInput> = productwhereinputSchema as unknown as z.ZodType<Prisma.ProductWhereInput>;
export const ProductWhereInputObjectZodSchema = productwhereinputSchema;
