import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  productId: z.boolean().optional(),
  rating: z.boolean().optional(),
  comment: z.boolean().optional(),
  date: z.boolean().optional(),
  reviewerName: z.boolean().optional(),
  reviewerEmail: z.boolean().optional()
}).strict();
export const ReviewSelectObjectSchema: z.ZodType<Prisma.ReviewSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReviewSelect>;
export const ReviewSelectObjectZodSchema = makeSchema();
