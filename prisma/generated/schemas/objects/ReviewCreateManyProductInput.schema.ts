import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  rating: z.number().int(),
  comment: z.string(),
  date: z.coerce.date(),
  reviewerName: z.string(),
  reviewerEmail: z.string()
}).strict();
export const ReviewCreateManyProductInputObjectSchema: z.ZodType<Prisma.ReviewCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyProductInput>;
export const ReviewCreateManyProductInputObjectZodSchema = makeSchema();
