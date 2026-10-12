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
export const ReviewCreateManyInputObjectSchema: z.ZodType<Prisma.ReviewCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyInput>;
export const ReviewCreateManyInputObjectZodSchema = makeSchema();
