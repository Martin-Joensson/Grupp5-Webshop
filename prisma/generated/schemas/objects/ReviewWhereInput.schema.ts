import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProductNullableScalarRelationFilterObjectSchema as ProductNullableScalarRelationFilterObjectSchema } from './ProductNullableScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const reviewwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewWhereInputObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewWhereInputObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  productId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  rating: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  comment: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  reviewerName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reviewerEmail: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  product: z.union([z.lazy(() => ProductNullableScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const ReviewWhereInputObjectSchema: z.ZodType<Prisma.ReviewWhereInput> = reviewwhereinputSchema as unknown as z.ZodType<Prisma.ReviewWhereInput>;
export const ReviewWhereInputObjectZodSchema = reviewwhereinputSchema;
