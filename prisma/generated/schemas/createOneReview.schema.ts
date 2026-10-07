import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { ReviewUncheckedCreateInputObjectSchema as ReviewUncheckedCreateInputObjectSchema } from './objects/ReviewUncheckedCreateInput.schema';

export const ReviewCreateOneSchema: z.ZodType<Prisma.ReviewCreateArgs> = z.object({   data: ReviewUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewCreateArgs>;

export const ReviewCreateOneZodSchema = z.object({   data: ReviewUncheckedCreateInputObjectSchema }).strict();