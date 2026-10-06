import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  rating: z.number().int(),
  comment: z.string(),
  date: z.coerce.date(),
  reviewerName: z.string(),
  reviewerEmail: z.string()
}).strict();
export const ReviewCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutProductInput>;
export const ReviewCreateWithoutProductInputObjectZodSchema = makeSchema();
