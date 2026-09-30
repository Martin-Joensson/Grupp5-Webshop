import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  productId: z.number().int().optional().nullable(),
  rating: z.number().int(),
  comment: z.string(),
  date: z.coerce.date(),
  reviewerName: z.string(),
  reviewerEmail: z.string()
}).strict();
export const ReviewUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateInput>;
export const ReviewUncheckedCreateInputObjectZodSchema = makeSchema();
