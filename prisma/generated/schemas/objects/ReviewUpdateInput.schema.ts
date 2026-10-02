import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUpdateOneWithoutReviewsNestedInputObjectSchema as ProductUpdateOneWithoutReviewsNestedInputObjectSchema } from './ProductUpdateOneWithoutReviewsNestedInput.schema'

const makeSchema = () => z.object({
  rating: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  comment: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  reviewerName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  reviewerEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductUpdateOneWithoutReviewsNestedInputObjectSchema).optional()
}).strict();
export const ReviewUpdateInputObjectSchema: z.ZodType<Prisma.ReviewUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateInput>;
export const ReviewUpdateInputObjectZodSchema = makeSchema();
