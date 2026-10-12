import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const reviewscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  productId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  rating: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  comment: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  reviewerName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reviewerEmail: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ReviewScalarWhereInputObjectSchema: z.ZodType<Prisma.ReviewScalarWhereInput> = reviewscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReviewScalarWhereInput>;
export const ReviewScalarWhereInputObjectZodSchema = reviewscalarwhereinputSchema;
