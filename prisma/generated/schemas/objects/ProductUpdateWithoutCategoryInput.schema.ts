import * as z from 'zod';
import { Prisma } from '../../../../app/generated/prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { ProductUpdatetagsInputObjectSchema as ProductUpdatetagsInputObjectSchema } from './ProductUpdatetagsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUpdateimagesInputObjectSchema as ProductUpdateimagesInputObjectSchema } from './ProductUpdateimagesInput.schema';
import { ReviewUpdateManyWithoutProductNestedInputObjectSchema as ReviewUpdateManyWithoutProductNestedInputObjectSchema } from './ReviewUpdateManyWithoutProductNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.coerce.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  discountPercentage: z.union([z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'discountPercentage' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rating: z.union([z.coerce.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  stock: z.union([z.coerce.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tags: z.union([z.lazy(() => ProductUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  brand: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  sku: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  weight: z.union([z.coerce.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  width: z.union([z.coerce.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  height: z.union([z.coerce.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  depth: z.union([z.coerce.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  warrantyInformation: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  shippingInformation: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  availabilityStatus: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  returnPolicy: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  minimumOrderQuantity: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  barcode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  qrCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  images: z.union([z.lazy(() => ProductUpdateimagesInputObjectSchema), z.string().array()]).optional(),
  thumbnail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUpdateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ProductUpdateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateWithoutCategoryInput>;
export const ProductUpdateWithoutCategoryInputObjectZodSchema = makeSchema();
